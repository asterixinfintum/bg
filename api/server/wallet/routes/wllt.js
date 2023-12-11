import express from 'express';

import Wallet from '../models/wllt';
import WithdrawalRequest from '../models/withdrawalrequest';

import authenticateToken from '../../utils/authenticateToken';

const walletroute = express.Router();

walletroute.get('/wallets', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(404).send({ message: 'Not allowed' });
    }

    try {
        const ownerId = req.user._id;
        const wallets = await Wallet.find({ ownerId });

        const walletsPromises = wallets.map(async ({ bitcoinAddress, _id, walletType, balance }) => {
            const blc = await Wallet.returnTotalBlc(_id);
            const blcs = await Wallet.returnBlcs(_id);
            const transactions = await Wallet.getTransactions(_id);
            const assetblcs = await Wallet.returnAssetBlcs(_id);

            return { bitcoinAddress, _id, walletType, blc, blcs, transactions, assetblcs, balance };
        });

        const wllts = await Promise.all(walletsPromises);
        res.status(200).send({ wllts });
    } catch (error) {
        console.error('Error retrieving wallets:', error);
        res.status(500).send({ error: 'An error occurred while retrieving wallets.' });
    }
});

walletroute.post('/withdraw', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(404).send({ message: 'Not allowed' });
    }

    try {
        const { asset, amount, usdamount, Bank, Account, wallet, wallettype } = req.body;
        const withdrawrequest = new WithdrawalRequest({
            userid: req.user._id,
            asset,
            amount,
            usdamount,
            Bank,
            Account,
            wallet,
            wallettype
        });

        await withdrawrequest.save();
        res.status(200).send({ message: 'Request sent successfully.' });
    } catch (error) {
        console.error('Error processing withdrawal request:', error);
        res.status(500).send({ error: 'An error occurred while processing the withdrawal request.' });
    }
});

walletroute.get('/balance', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(404).send({ message: 'Not allowed' });
    }

    try {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });

        if (!wallet) {
            return res.status(404).send({ message: 'Wallet not found' });
        }

        const blc = await Wallet.returnTotalBlc(_id);
        res.status(200).send({ balance: blc });
    } catch (error) {
        console.error('Error retrieving balance:', error);
        res.status(500).send({ error: 'An error occurred while retrieving the balance.' });
    }
});

walletroute.get('/balances', authenticateToken, async (req, res) => {
    if (!req.user || !req.user._id) {
        return res.status(404).send({ message: 'Not allowed' });
    }

    try {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });

        if (!wallet) {
            return res.status(404).send({ message: 'Wallet not found' });
        }

        const blcs = await Wallet.returnBlcs(_id);
        res.status(200).send({ balances: blcs });
    } catch (error) {
        console.error('Error retrieving balances:', error);
        res.status(500).send({ error: 'An error occurred while retrieving balances.' });
    }
});


walletroute.get('/transactions', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });

        if (wallet) {
            const transactions = await Wallet.getTransactions(_id);
            res.status(200).send({ transactions });
        } else {
            res.status(404).send({ message: 'not allowed' })
        }
    } else {
        res.status(404).send({ message: 'not allowed' })
    }
});

/*walletroute.post('/swap', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const _id = req.query.walletid;
        const wallet = await Wallet.findOne({ _id });
        let fee = 0;

        const { quantity, assetFrom, assetTo } = req.body;

        if (wallet) {
            const swap = await wallet.swap(quantity, fee, assetFrom, assetTo);
            res.status(200).send({ swap });
        } else {
            res.status(404).send({ message: 'not allowed' })
        }
    } else {
        res.status(404).send({ message: 'not allowed' })
    }
});*/

export default walletroute;