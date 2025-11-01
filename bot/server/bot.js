require("dotenv").config();
const { Telegraf } = require('telegraf');

const fs = require('fs').promises;
const path = require('path');

import Subscriber from './models/subscriber';
import User from './models/user';
import AssetBalance from './models/assetBalance';
import Asset from './models/asset';

import mongoose from 'mongoose';

const BOT_TOKEN = process.env.BOT_TOKEN;
const SUBSCRIBE_PASSWORD = process.env.SUBSCRIBE_PASSWORD;

const bot = new Telegraf(BOT_TOKEN);

function processLines(message, lineFunction) {
  const lines = message.split(/\r?\n/);

  lines.forEach((line, index) => {
    lineFunction(line, index);
  });
}

async function sendMessageToUser(userId, message) {
  try {
    await bot.telegram.sendMessage(userId, message);
    // console.log(`Message sent to user ${userId}`);
    return { success: true };
  } catch (error) {
    console.error(`Failed to send message to ${userId}:`, error.message);
    return { success: false, error: error.message };
  }
}

// Function to send message to all subscribers
async function sendMessageToAllSubscribers(message) {
  try {
    const subscribers = await Subscriber.find({});
    let successCount = 0;
    let failCount = 0;

    for (const subscriber of subscribers) {
      const result = await sendMessageToUser(subscriber.userId, message);
      if (result.success) {
        successCount++;
      } else {
        failCount++;
      }

      // Small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 100));
    }

    return { success: true, successCount, failCount };
  } catch (error) {
    console.error('Error sending to all subscribers:', error);
    return { success: false, error: error.message };
  }
}

// Handle subscription when user sends the password
bot.on('text', async (ctx) => {
  const messageText = ctx.message.text;
  const userId = ctx.from.id;

  // Help command
  if (messageText === '/help' || messageText === '/start') {
    const helpText = `🤖 Backup Bot Commands:
    
/backup - Get default backup (first 100 documents)
/backup <start> - Get backup starting from index
/backup <start> <end> - Get backup from start to end index

Examples:
/backup - First 100 documents
/backup 50 - Documents 50 to 150
/backup 100 200 - Documents 100 to 200

⚠️ Note: Large ranges may take longer to process`;

    ctx.reply(helpText);
    return;
  }

  // Backup command with pagination
  if (messageText.startsWith('/backup')) {
    try {
      // Default values
      let startIndex = 0;
      let endIndex = 100;

      // Parse pagination parameters if provided
      const parts = messageText.split(' ').filter(part => part.trim() !== '');

      if (parts.length >= 2) {
        // Try to parse start index
        const startParam = parseInt(parts[1]);
        if (!isNaN(startParam) && startParam >= 0) {
          startIndex = startParam;
        } else {
          ctx.reply('⚠️ Invalid start index. Using default value (0).');
        }
      }

      if (parts.length >= 3) {
        // Try to parse end index
        const endParam = parseInt(parts[2]);
        if (!isNaN(endParam) && endParam > startIndex) {
          endIndex = endParam;
        } else {
          ctx.reply('⚠️ Invalid end index. Using default range.');
          endIndex = startIndex + 100;
        }
      }

      // Validate parameters
      if (startIndex < 0) startIndex = 0;
      if (endIndex <= startIndex) {
        ctx.reply('⚠️ End index must be greater than start index. Using default range.');
        endIndex = startIndex + 100;
      }

      // Check if range is too large
      const rangeSize = endIndex - startIndex;
      if (rangeSize > 1000) {
        ctx.reply('⚠️ Range too large. Maximum 1000 documents per backup.');
        endIndex = startIndex + 1000;
      }

      // Send processing message
      const processingMsg = await ctx.reply(`⏳ Generating backup for range ${startIndex}-${endIndex}...`);

      // Get backup data with pagination
      const res = await getItemsForBackUp(startIndex, endIndex);
      const jsonData = JSON.stringify(res, null, 2);

      // Check if backup is empty
      const totalDocs = Object.values(res).reduce((sum, docs) => sum + docs.length, 0);
      if (totalDocs === 0) {
        ctx.reply('📭 No documents found in the specified range.');
        return;
      }

      // Create filename with pagination info
      const filename = `backup_${userId}_${startIndex}-${endIndex}_${Date.now()}.json`;
      const filePath = path.join(__dirname, 'backups', filename);

      // Ensure backups directory exists
      await fs.mkdir(path.dirname(filePath), { recursive: true });
      await fs.writeFile(filePath, jsonData);

      // Send file to user
      await ctx.replyWithDocument({
        source: filePath,
        filename: filename
      });

      // Send summary message with pagination info
      ctx.reply(`✅ Backup completed!\n📊 Range: ${startIndex}-${endIndex}\n📄 Documents: ${totalDocs}\n💾 File: ${filename}`);

      // Delete processing message
      await ctx.telegram.deleteMessage(processingMsg.chat.id, processingMsg.message_id);

    } catch (error) {
      console.error('Backup error:', error);
      ctx.reply('❌ Error creating backup. Please try again with a smaller range.');
    }

    return;
  }

  if (messageText.startsWith('/updateblcs')) {
    console.log('client update')
    processLines(messageText, (line, lineNumber) => {
      const result = processLine(line);
      console.log(result);
    });
  }

  if (messageText === SUBSCRIBE_PASSWORD) {
    try {
      // Check if already subscribed
      const existingSubscriber = await Subscriber.findOne({ userId });

      if (existingSubscriber) {
        ctx.reply('You are already subscribed! ✅');
      } else {
        // Add new subscriber
        await Subscriber.create({ userId });
        ctx.reply('You have been successfully subscribed! ✅');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      ctx.reply('Error processing subscription. Please try again.');
    }
  } else {
    ctx.reply(`You sent: "${messageText}"`);
  }
});

bot.start((ctx) => {
  ctx.reply('Welcome! Send the subscription password to receive messages.');
});

bot.help((ctx) => {
  ctx.reply('Send the subscription password to become a subscriber.');
});

bot.catch((err, ctx) => {
  console.error(`Error for ${ctx.updateType}:`, err);
  ctx.reply('Oops! Something went wrong.');
});

bot.launch().then(() => {
  console.log('Bot started successfully!');
});

// Export functions for use in Express routes
module.exports = {
  bot,
  sendMessageToUser,
  sendMessageToAllSubscribers
};

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

async function getItemsForBackUp(startIndex = 0, endIndex = 100) {
  const results = {};

  // Validate pagination parameters
  if (startIndex < 0) startIndex = 0;
  if (endIndex < startIndex) endIndex = startIndex + 100;

  const limit = endIndex - startIndex;

  if (limit <= 0) {
    // Return empty results if pagination range is invalid
    for (const modelName of mongoose.modelNames()) {
      results[modelName] = [];
    }
    return results;
  }

  try {
    for (const modelName of mongoose.modelNames()) {
      const Model = mongoose.models[modelName];

      // Fetch documents with pagination
      const docs = await Model.find()
        .skip(startIndex)
        .limit(limit)
        .lean();

      results[modelName] = docs || [];
    }

    return results;
  } catch (err) {
    console.error("Error fetching docs", err);

    // Return empty results on error
    for (const modelName of mongoose.modelNames()) {
      results[modelName] = [];
    }
    return results;
  }
}

function processLine(line) {
  // Trim whitespace and ignore empty lines
  const trimmedLine = line.trim();
  if (!trimmedLine) return;

  // Split on "and" (case-insensitive)
  const parts = trimmedLine.split(/\s+and\s+/i);

  if (parts.length === 2) {
    // Process left and right sides of "and"
    const leftSide = parts[0].trim();
    const rightSide = parts[1].trim();

    // Check if right side contains "add" followed by a number
    const addMatch = rightSide.match(/add\s+(\d+)/i);

    if (addMatch) {
      const number = parseInt(addMatch[1], 10);
      console.log(`Left: ${leftSide}, Operation: add ${number}`);
      // Here you would perform your actual operation
      return { left: leftSide, operation: 'add', value: number };
    } else {
      console.log(`Left: ${leftSide}, Right: ${rightSide}`);
      return { left: leftSide, right: rightSide };
    }
  } else {
    // Handle case where there's no "and" in the line
    const addMatch = trimmedLine.match(/(.+?)\s+add\s+(\d+)/i);

    if (addMatch) {
      const name = addMatch[1].trim();
      const number = parseInt(addMatch[2], 10);
      console.log(`Name: ${name}, Operation: add ${number}`);
      return { name: name, operation: 'add', value: number };
    } else {
      console.log(`Simple line: ${trimmedLine}`);
      return { text: trimmedLine };
    }
  }
}