import express from 'express';

import Wallet from '../models/wllt';

import authenticateToken from '../../utils/authenticateToken';

const walletroute = express();

walletroute.get('/wallets', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const ownerId = req.user._id;

        const wallets = await Wallet.find({ ownerId });

        const walletsPromises = wallets.map(async ({ bitcoinAddress, _id, walletType, balance }) => {
            const blc = await Wallet.returnTotalBlc(_id);
            const blcs = await Wallet.returnBlcs(_id);
            const transactions = await Wallet.getTransactions(_id);
            const assetblcs = await Wallet.returnAssetBlcs(_id);

            return {
                bitcoinAddress,
                _id,
                walletType,
                blc,
                blcs,
                transactions,
                assetblcs,
                balance
            }
        });

        const wllts = await Promise.all(walletsPromises);

        res.status(200).send({ wllts });
    }
})

walletroute.get('/balance', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });

        if (wallet) {
            const blc = await Wallet.returnTotalBlc(_id);
            res.status(200).send({ balance: blc });
        }
    }
});

walletroute.get('/balances', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });

        if (wallet) {
            const blcs = await Wallet.returnBlcs(_id);
            res.status(200).send({ balances: blcs });
        }
    }
});

walletroute.post('/withdraw', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });
        const { quantity, assetid } = req.body

        if (wallet) {
            await Wallet.withdrawal(quantity, assetid, _id);

            res.status(200).send({ message: 'done' });
        }
    }
});

walletroute.get('/transactions', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });

        if (wallet) {
            const transactions = await Wallet.getTransactions(_id);
            res.status(200).send({ transactions });
        }
    }
});

walletroute.post('/deposit', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const assetid = req.query.assetid;
        const { quantity } = req.body;

        const wallet = await Wallet.findOne({ _id });

        if (wallet) {
            wallet.deposit(quantity, assetid);
            res.status(200).send({ message: 'deposit successful' });
        }
    }
})

walletroute.post('/swap', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });
        let fee = 0;

        const { quantity, assetFrom, assetTo } = req.body;

        if (wallet) {
            const swap = await wallet.swap(quantity, fee, assetFrom, assetTo);
            res.status(200).send({ swap });
        }
    }
});

walletroute.get('/wllts', async (req, res) => {
    const wallets = await Wallet.find();
    res.status(200).send({ wallets })
})

export default walletroute;