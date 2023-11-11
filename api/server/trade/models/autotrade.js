const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autoTradeSchema = new Schema({
    tradingPair: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    assetId: {
        type: String,
        required: true
    },
    walletassetid: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    initialTotal: {
        type: Number,
        required: true
    },
    assetType: {
        type: String,
        enum: ['crypto', 'stock', 'commodity'],
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    orders: [],
    autotradestrategies: [],
    wallet: {
        type: String,
        required: true
    },
    tradeStatus: {
        type: String,
        required: true,
        default: 'profit',
        enum: ['profit', 'loss']
    }
});

autoTradeSchema.statics.recordbuy = async function () {

}

autoTradeSchema.statics.recordsell = async function () {

}

const AutoTrade = mongoose.model('Autotrade', autoTradeSchema);

module.exports = AutoTrade;