import express from 'express';

const autotrade = express();

import deductAmountFromWalletAsset from '../functions/deductAmountFromWalletAsset';
import createAssetBalanceAutoTrade from '../functions/createAssetBalanceAutoTrade';

import authenticateToken from '../utils/authenticateToken';

import AutoTrade from '../models/autotrade';

autotrade.post('/createautotrade', authenticateToken, async (req, res) => {
    if (req.user && req.user._id) {
        let margin = 'none';
        const ownerId = req.user._id;

        const {
            assetBalance,
            assetBalanceUSD,
            assetPriceAtCreation,
            autotradestrategies,
            orderType,
            capital,
            quantityAtCreation,
            wallettype,
            assetId,
        } = req.body;

        if (wallettype === 'margin') {
            margin = req.body.margin;
        }

        const newautotrade = {
            ownerId,
            capital,
            margin,
            orderType,
            wallettype,
            assetId,
            assetBalanceAtCreation: assetBalance,
            assetBalanceAtCreationUSD: assetBalanceUSD,
            assetPriceAtCreation,
            assetQuantityAtCreation: quantityAtCreation,
            assetQuantityUSD: capital,
            autotradestrategies,
        }

        const newAutTrade = new AutoTrade(newautotrade);

        newAutTrade.save()
            .then(auttrade => {
                deductAmountFromWalletAsset(
                    ownerId,
                    wallettype,
                    assetId,
                    capital
                ).then(async (updatedwalletasset) => {
                    createAssetBalanceAutoTrade(updatedwalletasset, capital)
                        .then(assetbalance => {
                            //console.log(assetbalance)
                            res.status(200).json({ auttrade, assetbalance, updatedwalletasset })
                        })
                        .catch(err => {
                            console.log(err);
                        })
                }).catch(error => {
                    console.log(error)
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({ error: 'not created error' });
            });
    }
});

export default autotrade;