import express from 'express';

import Wallet from '../models/wllt';

import authenticateToken from '../../utils/authenticateToken';

const transactions = express();

transactions.post('/convert', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const { toquant, fromquant, assetfrom, assetto, wallet, total, transactionFee } = req.body;

        const wllt = await Wallet.findOne({ _id: wallet });

        wllt.swap(toquant, fromquant, assetto, assetfrom, transactionFee)
            .then(result => {
                console.log(result)
                res.status(201).send({ result });
            })
            .catch(error => {
                res.status(400).send({ error });
            })
    }
});

export default transactions;