import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import Wallet from '../models/wallet';

import authenticateToken from '../utils/authenticateToken';

const client = express();

async function findUserByToken(token) {
    try {
      const user = await User.findOne({ token: token }).exec();
      return user;
    } catch (error) {
      throw new Error('Error finding user by token: ' + error.message);
    }
}

client.get('/getclient', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const user = req.user;
        const id = user._id
        
        try {
            const client = await User.findById(id);
            console.log(client);
            const bitcoinWallets = await Wallet.find({ ownerId: user._id });
            const userWalletsBTC = bitcoinWallets.map(({ walletType, bitcoinAddress, balance }) => {
                return  { walletType, bitcoinAddress, balance }
            });

            const { 
                email, 
                phonenumber, 
                anonId, 
                _id, 
                token, 
                warnings, 
                transactions, 
                notifications,
                transactionFeePercentage,
                password
            } = client;
            
            res.json({
                 message: 'Client Data Found.', 
                 token, 
                 userData: { 
                    email, 
                    phonenumber, 
                    anonId, 
                    _id, 
                    warnings, 
                    transactions, 
                    notifications,
                    userWalletsBTC,
                    transactionFeePercentage,
                    password
                } 
            });

        } catch (error) {
            //console.log('error here:', error);
            res.status(404).send({ message: 'no user' });
        }
    }
});

client.get('/getclientbykeytoken', authenticateToken, async (req, res) => {
    
    if (req.user) {
        const token = req.user.token;
        
        findUserByToken(token)
            .then(user => {
                const { 
                    email, 
                    phonenumber, 
                    anonId, 
                    _id, 
                    token, 
                    keytoken,
                    warnings, 
                    transactions, 
                    notifications 
                } = user;
                
                res.json({
                     message: 'Client Data Found.', 
                     token, 
                     keytoken,
                     userData: { 
                        email, 
                        phonenumber, 
                        anonId, 
                        _id, 
                        warnings, 
                        transactions, 
                        notifications 
                    } 
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }
});

export default client;