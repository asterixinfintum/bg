const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Your MongoDB connection string
const MONGODB_URI = process.env.DB;
const EXPORT_DIR = './mongodb_export';

// Ensure export directory exists
if (!fs.existsSync(EXPORT_DIR)) {
  fs.mkdirSync(EXPORT_DIR, { recursive: true });
}

async function exportAllCollectionsAsRoute(req, res) {
  try {
    console.log('🚀 Starting database export via route...');

    // Connect to MongoDB
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB successfully');
    console.log(`Database: ${mongoose.connection.db.databaseName}`);

    // Get all collection names
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log(`Found ${collections.length} collections`);

    const exportData = {
      exportDate: new Date().toISOString(),
      database: mongoose.connection.db.databaseName,
      totalCollections: collections.length,
      collections: {}
    };

    // Export each collection
    for (const collectionInfo of collections) {
      const collectionName = collectionInfo.name;
      
      // Skip system collections
      if (collectionName.startsWith('system.')) {
        console.log(`Skipping system collection: ${collectionName}`);
        continue;
      }

      console.log(`\nExporting collection: ${collectionName}`);
      
      // Get all documents from the collection
      const documents = await mongoose.connection.db.collection(collectionName).find({}).toArray();
      
      exportData.collections[collectionName] = {
        count: documents.length,
        documents: documents
      };

      console.log(`✓ Exported ${documents.length} documents from ${collectionName}`);
    }

    // Set response headers for file download
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `traderapiv_export_${timestamp}.zip`;
    
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    
    // Create zip archive
    const archive = archiver('zip', {
      zlib: { level: 9 } // Maximum compression
    });

    // Handle archive errors
    archive.on('error', (err) => {
      console.error('Archive error:', err);
      if (!res.headersSent) {
        res.status(500).json({ error: 'Failed to create archive' });
      }
    });

    // Pipe archive to response
    archive.pipe(res);

    // Add main export file to archive
    const mainExport = JSON.stringify(exportData, null, 2);
    archive.append(mainExport, { name: `traderapiv_complete_export.json` });

    // Add individual collection files to archive
    for (const [collectionName, collectionData] of Object.entries(exportData.collections)) {
      const collectionJson = JSON.stringify(collectionData.documents, null, 2);
      archive.append(collectionJson, { name: `collections/${collectionName}.json` });
    }

    // Add README file
    const readmeContent = `
# TraderAPIv Database Export

Export Date: ${new Date().toISOString()}
Database: traderapiv
Total Collections: ${Object.keys(exportData.collections).length}

## Collections Exported:
${Object.entries(exportData.collections).map(([name, data]) => `- ${name}: ${data.count} documents`).join('\n')}

## Files in this archive:
- traderapiv_complete_export.json: Complete database export
- collections/: Individual collection JSON files
`;
    
    archive.append(readmeContent, { name: 'README.md' });

    // Finalize the archive
    await archive.finalize();
    
    console.log(`\n🎉 Export completed and sent as download!`);
    console.log(`📦 File: ${filename}`);
    console.log(`📊 Total collections: ${Object.keys(exportData.collections).length}`);
    
    // Log summary
    console.log('\n📈 Export Summary:');
    Object.entries(exportData.collections).forEach(([name, data]) => {
      console.log(`  - ${name}: ${data.count} documents`);
    });

  } catch (error) {
    console.error('❌ Export error:', error);
    
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Export failed',
        message: error.message,
        details: 'Check MongoDB connection and try again'
      });
    }
  } finally {
    if (mongoose.connection.readyState !== 0) {
      await mongoose.connection.close();
      console.log('\n🔌 MongoDB connection closed');
    }
  }
}

module.exports = {
  exportAllCollectionsAsRoute
};