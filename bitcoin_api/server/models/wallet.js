const mongoose = require('mongoose');

const { Schema } = mongoose;

const walletSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true, // Adding an index for faster queries on ownerId
    },
    assetIdInTraderDB: {
        type: Schema.Types.ObjectId
    },
    xpub: {
        type: String,
        required: true,
    },
    privateKey: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    walletType: {
        type: String,
        required: true,
        enum: ["fiat/spot", "margin", "defi", "tokenized stocks", "bot trading", "bonus"]
    },
    mnemonic: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0
    },
    txs: {
        type: Number,
        default: 0
    },
    unconfirmedBalance: {
        type: Number,
        default: 0
    },
    confirmedTransactions: {
        type: Array,
        default: []
    }
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;