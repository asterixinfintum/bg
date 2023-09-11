import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import Wallet from '../models/wallet';

import uniqueIdGenerate from '../utils/uniqueIdGenerate';

const signup = express();

function createWallet(type, ownerId) {
    const wallet = new Wallet({
        ownerId,
        walletType: type
    });

    return wallet.save();
}

function createWallets({ ownerId }) {
    const walletTypes = ["fiat/spot", "margin", "defi", "tokenized stocks", "bot trading", "bonus"];

    return new Promise((resolve, reject) => {
        const promises = walletTypes.map(type => createWallet(type, ownerId));
        return Promise.all(promises)
            .then(createdWallets => {
                resolve(createdWallets);
            })
            .catch(error => {
                console.log(error, 'error creating wallets');
            })
    });
}

signup.post('/register', (req, res) => {
    const receivedCredentials = req.body;
    const user = new User(receivedCredentials);
    const payload = {
        _id: user._id,
        email: user.email
    };
    const token = jwt.sign(payload, process.env.secretKeyJWT);

    user.anonId = uniqueIdGenerate();
    user.token = token;

    user.save()
        .then(({ email, phonenumber, anonId, _id }) => {
            createWallets({ ownerId: _id })
                .then(createdWallets => {
                    console.log("Wallets created:", createdWallets);
                })
                .catch(error => {
                    console.error("Error creating wallets:", error);
                });

            res.json({ message: 'Credentials saved successfully.', token, userData: { email, phonenumber, anonId, _id } });
        })
        .catch(error => {
            console.error('Error saving credentials:', error);
            res.status(500).json({ error: 'An error occurred while saving credentials.' });
        });
});

export default signup;