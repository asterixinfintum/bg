import express from 'express';

//import User from '../models/user';
import AssetBalance from '../models/assetBalance';
import Wallet from '../models/wallet';
import WalletAsset from '../models/walletAsset';
import Withdraw from '../models/withdraw';

import updateWalletDeposit from '../functions/updateWalletDeposit';
import updateWalletTransfer from '../functions/updateWalletTransfer';

import authenticateToken from '../utils/authenticateToken';
import arithmetic from '../utils/arithmetic';

const { addAndConvertToNumber, subtractAndConvertToNumber } = arithmetic;

const wallet = express();

async function deleteAllAssetBalances() {
    try {
        // Delete all documents in the collection
        await AssetBalance.deleteMany({});

        console.log('All AssetBalances have been deleted.');
    } catch (error) {
        console.error('Error deleting AssetBalances:', error);
    }
}

//deleteAllAssetBalances();

wallet.post('/deposit', async (req, res) => {
    const deposit = req.body;

    const new_deposit = new AssetBalance(deposit);

    new_deposit.save()
        .then(newassetbalance => {
            updateWalletDeposit(newassetbalance)
                .then(walletasset => {
                    res.status(200).json({ walletasset })
                })
                .catch(err => {
                    console.log(err);
                })
        })
        .catch(error => {
            console.log(error)
        });
    /*if (req.user && req.user.id) {

        /* 
            the blockchain api typically makes this request after checking 
            the address the user makes the deposit to and returns this data that is 
            sent as a post request to this api 
        */

    /* this body is sent from the blockchain api, so most of the content in the body like the wallet type, 
    owner id etc is sent to the blockchain api from the front end */

    //infact all the data is gotten as a post request from the blockchain api after a succesful deposit in the address

    /*
        {
            "ownerId": "64b544ab6a536af9c2cb5acf",
            "assetId": "64b6a6f501fec25e41a95013",
            "balanceAmount": 0.05288719,
            "swapOrConvertFrom": "none",
            "swapOrConvertTo": "none",
            "assetInteractedWith": "none",
            "assetType": "crypto",
            "transactionType": {
                "type": "deposit",
                "toWallet": "fiat/spot",
                "fromAsset": "",
                "toAsset": ""
            },
            "transactionDescription": "deposited 0.05288719 in fiat/spot wallet",
            "currentWallet": "fiat/spot",
            "cryptoAddressInteractedWith": "",
            "cryptoAddressNetwork": ""
        }

    
}*/
});

wallet.post('/transfer', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const transfer = req.body;
        //transfers are wholly internal

        const { ownerId, assetId, transactionType, balanceAmount } = transfer;

        //you can only make transfers of assets you own
        const assetdb_id = assetId;
        const walletType = transactionType.fromWallet;
        const user_wallet = await Wallet.findOne({ ownerId, walletType });
        const walletId = user_wallet._id;
        const transactionFee = transactionType.fee;
        const wallet_asset = await WalletAsset.findOne({ ownerId, assetdb_id, walletId });

        if (wallet_asset) {
            const balanceinWallet = wallet_asset.balanceinWallet;
            const totalAmount = addAndConvertToNumber(balanceAmount, transactionFee);

            if (totalAmount < balanceinWallet) {
                const new_transfer = new AssetBalance(transfer);
                new_transfer.save()
                    .then(newassetbalance => {
                        updateWalletTransfer(newassetbalance, { deductfrom_asset: wallet_asset })
                            .then(({ message, updatedWalletAsset, walletasset }) => {
                                res.status(200).json({ message, updatedWalletAsset, walletasset })
                            })
                            .catch(error => {
                                console.log(error);
                            })
                    })
                    .catch(err => {
                        console.log(err)
                    })
            } else {
                res.status(500).json({ error: 'not enough funds' });
            }
        }
    }
});

wallet.post('/convert', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const conversion = req.body;
        //conversions are wholly internal
        //console.log(conversion);

        const {
            ownerId,
            balanceAmount,
            assetType,
            transactionType,
            currentWallet
        } = conversion;

        const { type, fee, fromAsset, toAsset, balanceAmountOftoAsset } = transactionType;

        const walletType = currentWallet;
        const user_wallet = await Wallet.findOne({ ownerId, walletType });
        const walletId = user_wallet._id;
        const wallet_asset_from = await WalletAsset.findOne({ ownerId, assetdb_id: fromAsset, walletId });
        const wallet_asset_to = await WalletAsset.findOne({ ownerId, assetdb_id: toAsset, walletId });

        if (wallet_asset_from) {
            const totalAmount = addAndConvertToNumber(balanceAmount, fee);
            const { balanceinWallet } = wallet_asset_from;

            if (balanceinWallet > totalAmount) {
                const updateBalanceinWallet = subtractAndConvertToNumber(balanceinWallet, totalAmount);

                const balance = {
                    balance: updateBalanceinWallet,
                    type
                }

                const balanceHistory = [...wallet_asset_from.balanceHistory, balance];
                const new_conversion = new AssetBalance(conversion);

                const newassetbalance = await new_conversion.save();

                WalletAsset.findOneAndUpdate(
                    { _id: wallet_asset_from._id },
                    {
                        balanceinWallet: updateBalanceinWallet,
                        balanceHistory
                    }, { new: true }, async (err, updatedWalletAssetFrom) => {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log('updatedWalletAssetFrom:', updatedWalletAssetFrom);

                            if (wallet_asset_to) {
                                if (wallet_asset_to) {
                                    WalletAsset.findOneAndUpdate(
                                        { _id: wallet_asset_to._id },
                                        {
                                            balanceinWallet: addAndConvertToNumber(balanceAmountOftoAsset, wallet_asset_to.balanceinWallet),
                                            balanceHistory: [...wallet_asset_to.balanceHistory, { balance: balanceAmountOftoAsset, transactionType: 'conversion' }]
                                        }, { new: true }, async (err, updatedWalletAssetTo) => {
                                            if (err) {
                                                console.log(err)
                                            } else {
                                                res.status(200).json({
                                                    message: 'conversion complete',
                                                    from: updatedWalletAssetFrom,
                                                    to: updatedWalletAssetTo,
                                                    newassetbalance
                                                });
                                            }
                                        });
                                }
                            }

                            if (!wallet_asset_to) {
                                const walletasset = {
                                    ownerId,
                                    walletId,
                                    assetdb_id: toAsset,
                                    assetType,
                                    balanceinWallet: balanceAmountOftoAsset,
                                    balanceHistory: [
                                        {
                                            balance: balanceAmountOftoAsset,
                                            transactionType: 'conversion'
                                        }
                                    ]
                                }

                                const new_walletasset = new WalletAsset(walletasset);
                                await new_walletasset.save();

                                res.status(200).json({
                                    message: 'conversion complete',
                                    from: updatedWalletAssetFrom,
                                    to: new_walletasset,
                                    newassetbalance
                                });
                            }
                        }
                    }
                );
            } else {
                res.status(500).json({ error: 'not enough funds for transaction' });
            }
        } else {
            res.status(500).json({ error: 'not enough funds for transaction' });
        }
    }
});

wallet.get('/client/wallets', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const ownerId = req.user._id;
        const user_wallets = await Wallet.find({ ownerId });
        res.status(200).json({ user_wallets });
    }
});

wallet.get('/client/walletassets', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const ownerId = req.user._id;
        const walletId = req.query.wallet;
        const walletAssets = await WalletAsset.find({ ownerId, walletId });

        res.status(200).json({ walletAssets });
    }
});

wallet.post('/client/withdraw', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        const withdrwdt = {
            ownerId: req.user._id,
            ...req.body
        }

        const withdrawal = new Withdraw(withdrwdt);
        await withdrawal.save();

        res.status(200).json({ message: 'done' });
    }
});

export default wallet;