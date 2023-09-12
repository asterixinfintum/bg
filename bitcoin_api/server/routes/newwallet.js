import express from 'express';
const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const { createHDWallet } = require("../wallet.bitcoin");

import Wallet from '../models/wallet';

const newwallet = express();

newwallet.get('/newwallet', async (req, res) => {
    const { ownerId, walletType, assetIdInTraderDB } = req.query;
    const newHDWallet = createHDWallet(process.env.NET);

    const newWallet = new Wallet({
        ownerId,
        walletType,
        assetIdInTraderDB,
        ...newHDWallet
    });

    const userwallet = await newWallet.save();
    res.status(201).json({
        userwallet: {
            address: userwallet.address,
            walletType: userwallet.walletType,
            assetIdInTraderDB: userwallet.assetIdInTraderDB
        }
    });
});

export default newwallet;