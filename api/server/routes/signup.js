require("dotenv").config();
import express from 'express';
import jwt from 'jsonwebtoken';
const { mainnet, testnet } = require("bitcore-lib/lib/networks");
const { createHDWallet } = require("../functions/wallet.bitcoin");

import User from '../models/user';
import Wallet from '../wallet/models/wllt';

import uniqueIdGenerate from '../utils/uniqueIdGenerate';

const signup = express();

async function createBitcoinWallet(type, ownerId, { address, mnemonic, privateKey, xpub }) {
    const wallet = new Wallet({
        ownerId,
        walletType: type,
        bitcoinAddress: address,
        bitcoinMnemonic: mnemonic,
        bitcoinPrivateKey: privateKey,
        bitcoinXpub: xpub
    });

    try {
        return await wallet.save();
    } catch (error) {
        throw error;
    }
}

async function createBitcoinWallets({ ownerId }) {
    const walletTypes = ["fiat/spot", "margin"];
    const promises = walletTypes.map(async walletType => {
        const newHDWallet = process.env.NET === 'testnet' ? createHDWallet(testnet) : createHDWallet(mainnet);
        return createBitcoinWallet(walletType, ownerId, newHDWallet);
    });

    try {
        const createdBitcoinWallets = await Promise.all(promises);
        console.log(createdBitcoinWallets);
        return createdBitcoinWallets;
    } catch (error) {
        throw error;
    }
}

signup.post('/register', async (req, res) => {
    const receivedCredentials = req.body;
    const user = new User(receivedCredentials);
    const payload = {
        _id: user._id,
        email: user.email
    };
    const token = jwt.sign(payload, process.env.secretKeyJWT);

    user.anonId = uniqueIdGenerate();
    user.token = token;

    await user.save()
        .then(async ({ email, phonenumber, anonId, _id }) => {
            const btcWallets = await createBitcoinWallets({ ownerId: _id })
                .then(bitcoinWallets => {
                    return bitcoinWallets
                })
                .catch(err => {
                    console.log(err)
                });

            res.json({ message: 'Credentials saved successfully.', token, userData: { email, phonenumber, anonId, _id, btcWallets } });
        })
        .catch(error => {
            console.error('Error saving credentials:', error);
            res.status(500).json({ error: 'An error occurred while saving credentials.' });
        });
});

signup.post('/checkduplicatecredentials', async (req, res) => {
    const { email, phonenumber } = req.body;

    const duplicateEmail = await User.findOne({ email });
    const duplicatePhonenumber = await User.findOne({ phonenumber });

    if (duplicateEmail || duplicatePhonenumber) {
        return res.sendStatus(401);
    }

    res.status(200).json({ message: 'okay proceed' });
})

export default signup;