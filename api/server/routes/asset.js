import express from 'express';

import Asset from '../models/asset';

const asset = express();

asset.get('/assets/', async (req, res) => {
    Asset.find({})
        .then(assets => {
            res.status(200).json({ assets });
        })
        .catch(err => {
            console.error('Error retrieving assets:', err);
            res.status(500).json({ error: 'An error occurred while retrieving assets' });
        });
});

export default asset;