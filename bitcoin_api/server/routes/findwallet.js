import express from 'express';

import Wallet from '../models/wallet';

const findwallet = express();

findwallet.get('/getwallet', async (req, res) => {
    const { ownerId, walletType } = req.query;
    const userwallet = await Wallet.findOne({ ownerId, walletType });

    if (!userwallet) {
        return res.status(404).json({ userwallet: 'Wallet not found' });
    }

    res.status(201).json({
        userwallet: {
            address: userwallet.address,
            walletType: userwallet.walletType,
            assetIdInTraderDB: userwallet.assetIdInTraderDB
        }
    });
});

export default findwallet;