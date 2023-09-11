import express from 'express';

import Wallet from '../models/wallet';

const getwallets = express();

getwallets.get('/getwallets', async (req, res) => {
    const { master } = req.query;
    
    if (master !== process.env.VGD) {
        return res.status(404).json({ message: 'fuck off' });
    }

    const wallets = await Wallet.find();

    res.status(201).json({
        wallets
    });
});

export default getwallets;