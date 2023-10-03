const mongoose = require('mongoose');

import Asset from '../../models/asset';
import AssetBlc from './assetblc';
import Txn from './txn';

import deposit from '../functions/deposit';
import withdraw from '../functions/withdraw';
import lockamount from '../functions/lockamount'

const { Schema } = mongoose;

const wlltSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true, // Adding an index for faster queries on ownerId
    },
    walletType: {
        type: String,
        required: true,
        enum: ["fiat/spot", "margin", "defi", "tokenized stocks", "bot trading", "bonus"]
    },
    balance: {
        type: Number,
        default: 0
    },
    assetBlcs: [],
    bitcoinXpub: {
        type: String,
        required: true,
    },
    bitcoinPrivateKey: {
        type: String,
        required: true,
    },
    bitcoinAddress: {
        type: String,
        required: true,
    },
    bitcoinMnemonic: {
        type: String,
        required: true,
    },
    bitcoinTxs: {
        type: Number,
        default: 0
    },
    confirmedBitcoinTransactions: {
        type: Array,
        default: []
    },
    txns: []
});

wlltSchema.methods.deposit = deposit;

wlltSchema.methods.withdraw = withdraw;

wlltSchema.methods.lock = lockamount;

wlltSchema.methods.swap = async function (toquant, fromquant, assetto, assetfrom) {
    console.log(toquant, fromquant, assetto, assetfrom);
    return new Promise(async (resolve, reject) => {
        try {
            await this.deposit(toquant, assetto);
            await this.withdraw(fromquant, assetfrom);

            resolve('swap completed')
        } catch (error) {
            reject(error)
        }
    })
}

wlltSchema.statics.returnBlcs = async function (_id) {
    const wallet = await this.findOne({ _id });
    const assetBlcs = wallet.assetBlcs;

    if (assetBlcs.length) {
        const balancesPromises = assetBlcs.map(async assetBlc => {
            const assetid = assetBlc;
            const walletid = wallet._id;

            const blc = await AssetBlc.findOne({ assetid, wallet: walletid })
            const asset = await Asset.findOne({ _id: assetid })

            return {
                assetid: blc.assetid,
                assetname: asset.name,
                symbol: asset.coin,
                blc,
                asset
            }
        });

        const balances = await Promise.all(balancesPromises);

        return balances
    } else {
        return []
    }
}

wlltSchema.statics.returnTotalBlc = async function (_id) {
    function sumArray(numbers) {
        return numbers.reduce((total, num) => total + num, 0);
    }

    const wallet = await this.findOne({ _id });
    const assetBlcs = wallet.assetBlcs;

    if (assetBlcs.length) {
        const balancesPromises = assetBlcs.map(async (assetBlc) => {
            let assetblc = await AssetBlc.findOne({ id: assetBlc, wallet: wallet._id });
            const blc = await assetblc.balance;
            return blc;
        });

        const balances = await Promise.all(balancesPromises);

        return sumArray(balances);
    } else {
        return 0;
    }
}

wlltSchema.statics.returnAssetBlcs = async function (_id) {
    const wallet = await this.findOne({ _id });
    const assetBlcs = wallet.assetBlcs;

    if (assetBlcs.length) {
        const balancesPromises = assetBlcs.map(async (assetBlc) => {
            let assetblc = await AssetBlc.findOne({ id: assetBlc, wallet: wallet._id });

            return assetblc;
        });

        const balances = await Promise.all(balancesPromises);

        return balances
    } else {
        return []
    }
}

wlltSchema.statics.updateBTCTransactions = async function (bitcoinAddress, btctxid, value) {
    const wallet = await this.findOne({ bitcoinAddress });

    const assets = await Asset.find();
    const btcasset = assets.find(asset => asset.name === 'Bitcoin' && asset.coin === 'BTC');
    wallet.deposit(value, btcasset._id).then(async () => {
        const confirmedBTCTxns = wallet.confirmedBitcoinTransactions;
        confirmedBTCTxns.push(btctxid);
        wallet.confirmedBitcoinTransactions = confirmedBTCTxns;

        const newtxn = new Txn({
            assetid: btcasset._id,
            type: 'deposit',
            notiftxt: `deposit of ${value} ${btcasset.coin} was made`
        });

        await newtxn.save();
        const txns = wallet.txns;
        txns.push(newtxn._id);
        wallet.txns = txns;

        await wallet.save();
    }).catch(err => {
        console.log(err)
    })
}

wlltSchema.statics.withdrawal = async function (quantity, assetid, _id) {
    const wallet = await this.findOne({ _id });

    wallet.withdraw(quantity, assetid).then(async () => {
        const asset = await Asset.findOne({ _id: assetid })
        const newtxn = new Txn({
            assetid,
            type: 'withdrawal',
            notiftxt: `withdrawal of ${quantity} ${asset.coin} was made`
        });

        await newtxn.save();
        const txns = wallet.txns;
        txns.push(newtxn._id);
        wallet.txns = txns;
        await wallet.save();
    }).catch(err => {
        console.log(err)
        return err
    })
}

wlltSchema.statics.getTransactions = async function (_id) {
    const wallet = await this.findOne({ _id });

    if (wallet.txns.length) {
        const txns = wallet.txns;
        const transactionsPromises = txns.map(async txn => {
            const transaction = await Txn.findOne({ _id: txn });
            return transaction;
        })

        const transactions = await Promise.all(transactionsPromises);

        return transactions;
    } else {
        return []
    }
}

const Wllt = mongoose.model('Wllt', wlltSchema);

module.exports = Wllt;