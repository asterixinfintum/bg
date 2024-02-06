import express from 'express';

import Asset from '../models/asset';

const asset = express.Router();

asset.get('/assets/', async (req, res) => {
    try {
        const assets = await Asset.find({});
        const assetlist = []

        //console.log(assets)

        assets.forEach(({ _id, name, coin, symbol, assetType, price, image, listed }) => {
            if (listed) {
                assetlist.push({ _id, name, coin, symbol, assetType, price, image, listed })
            }
        });

        res.status(200).json({ assets: assetlist });
    } catch (err) {
        console.error('Error retrieving assets:', err);
        res.status(500).json({ error: 'An error occurred while retrieving assets' });
    }
});

asset.get('/asset/', async (req, res) => {
    try {
        const { assetid } = req.query;

        // Check if baseCurrency is provided
        if (!assetid) {
            return res.status(400).send({ error: 'assetid is required' });
        }

        const asset = await Asset.findOne({ _id: assetid });
        const { _id, name, coin, symbol, assetType, price, image, listed, pricehistory } = asset;

        const result = {
            _id,
            name,
            coin,
            assetType,
            symbol,
            price,
            image,
            listed
            //pricehistory: pricehistory.slice(0, 20)
        }

        res.status(200).json({ asset: result });
    } catch (err) {
        console.error('Error retrieving assets:', err);
        res.status(500).json({ error: 'An error occurred while retrieving assets' });
    }
})

export default asset;