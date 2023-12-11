import express from 'express';

import User from '../../models/user';
import Wllt from '../../wallet/models/wllt';
import Asset from '../../models/asset';
import AssetBlc from '../../wallet/models/assetblc';

const admin = express.Router();

import generatetradingpairs from '../../functions/generatetradingpairs';
import addpairquotes from '../../functions/addpairquotes';

admin.get('/allusers', async (req, res) => {
    try {
        const users = await User.find();

        res.status(200).send({ users });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

admin.get('/user', async (req, res) => {
    try {
        const { id } = req.query

        const user = await User.findOne({ _id: id });

        res.status(200).send({ user });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

admin.get('/userwallets', async (req, res) => {
    try {
        const { id } = req.query

        const userwallets = await Wllt.find({ ownerId: id });
        res.status(200).send({ userwallets });
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

admin.get('/user/assets', async (req, res) => {
    const { id, wallet } = req.query;

    try {
        const crypto = await Asset.find({ assetType: 'crypto' });
        const commodities = await Asset.find({ assetType: 'commodity' });
        const stocks = await Asset.find({ assetType: 'stock' });
        const fiat = await Asset.find({ assetType: 'fiat' });
        const userwallet = await Wllt.findOne({ _id: wallet });

        const processAssets = async (assets) => {
            const assetPromises = assets.map(async asset => {
                const assetid = asset._id.toString();
                const asstBlc = await AssetBlc.findOne({ assetid, wallet: userwallet._id });
                return { ...asset._doc, asstBlc: asstBlc ? asstBlc.balance : 0 };
            });
            return await Promise.all(assetPromises);
        };

        const cryptoblc = await processAssets(crypto);
        const commoditiesblc = await processAssets(commodities);
        const stocksblc = await processAssets(stocks);
        const fiatblc = await processAssets(fiat);

        // Send response back to client
        res.status(200).json({
            crypto: cryptoblc,
            commodities: commoditiesblc,
            stocks: stocksblc,
            fiat: fiatblc,
            userwallet
        });


    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing request');
    }
});

admin.post('/user/asset/add', async (req, res) => {
    try {
        const { balanceupdate } = req.body;
        const { wallet, assetid } = req.query;

        const userwallet = await Wllt.findOne({ _id: wallet });

        await userwallet.deposit(balanceupdate, assetid)

        res.status(200).json({
            message: 'done'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing request');
    }
})

admin.post('/user/asset/subtract', async (req, res) => {
    try {
        const { balanceupdate } = req.body;
        const { wallet, assetid } = req.query;

        const userwallet = await Wllt.findOne({ _id: wallet });

        await userwallet.withdraw(balanceupdate, assetid);

        res.status(200).json({
            message: 'done'
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error processing request');
    }
});

admin.post('/user/accounttypeupdate/update', async (req, res) => {
    try {
        const { id } = req.query;
        const { accounttypeupdate } = req.body;

        const user = await User.findOne({ _id: id });

        user.accountplan = accounttypeupdate;
        await user.save();

        res.status(200).json({
            message: 'done'
        });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

admin.post('/user/spotbtcaddress/update', async (req, res) => {
    try {
        const { id } = req.query;
        const { spotbtcaddress } = req.body;

        const user = await User.findOne({ _id: id });

        user.spotbtcaddress = spotbtcaddress;
        await user.save();

        res.status(200).json({
            message: 'done'
        });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
})

admin.post('/user/marginbtcaddress/update', async (req, res) => {
    try {
        const { id } = req.query;
        const { marginbtcaddress } = req.body;

        const user = await User.findOne({ _id: id });

        user.marginbtcaddress = marginbtcaddress;
        await user.save();

        res.status(200).json({
            message: 'done'
        });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

admin.get('/jhgchdh/generatetradingpair', async (req, res) => {
    try {
        await generatetradingpairs();

        res.status(200).json({ message: 'trading pairs generated' });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

admin.get('/jhgchdh/addpairquotes', async (req, res) => {
    try {
        await addpairquotes();

        res.status(200).json({ message: 'pair quotes generated' });
    } catch (error) {
        res.status(500).send('Error processing request');
    }
});

export default admin;