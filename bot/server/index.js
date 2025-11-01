require("dotenv").config();

import express from 'express';
import cors from 'cors';

import { bot, sendMessageToUser, sendMessageToAllSubscribers } from './bot'

const app = express();

const PORT = process.env.PORT;

import './dbconf';

app.use(express.json());
app.use(cors());

app.post('/broadcast', async (req, res) => {
    try {
        const { message } = req.body;

        if (!message) {
            return res.status(400).json({
                success: false,
                error: 'Message is required'
            });
        }

        const result = await sendMessageToAllSubscribers(message);

        if (result.success) {
            res.json({
                success: true,
                message: 'Broadcast sent successfully',
                stats: {
                    successCount: result.successCount,
                    failCount: result.failCount
                }
            });
        } else {
            res.status(500).json({
                success: false,
                error: result.error
            });
        }

    } catch (error) {
        console.error('Error in broadcast route:', error);
        res.status(500).json({
            success: false,
            error: 'Internal server error'
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});