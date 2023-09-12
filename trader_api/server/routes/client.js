import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/user';
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
        
        try {
            const client = await User.findById(user._id);
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
                    notifications ,
                    transactionFeePercentage,
                    password
                } 
            });

        } catch (error) {
            console.log('error:', error)
        }
    }
});

client.get('/generatekeytoken', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const user = req.user;

        try {
            const client = await User.findById(user._id);
            const keyToken = jwt.sign({ token: client.token }, process.env.secretKeyJWT);

            User.findOneAndUpdate({ _id: client._id }, { keytoken: keyToken }, { new: true })
                .then((updatedUser) => {
                    if (updatedUser) {
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
                        } = updatedUser;
                        
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
                    } else {
                        console.log('User not found.');
                    }
                })
                .catch((error) => {
                    console.error('Error updating user:', error);
                });

        } catch (error) {
            console.log(error);
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