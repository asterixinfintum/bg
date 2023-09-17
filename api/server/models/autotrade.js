const mongoose = require('mongoose');
const { Schema } = mongoose;

const autoTradeSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true, // Adding an index for faster queries on ownerId
    },
    capital: {
        type: Number,
        required: true
    },
    margin: {
        type: String,
        required: true,
        default: 'none'
    },
    orderType: {
        type: String,
        required: true
    },
    wallettype: {
        type: String,
        required: true
    },
    profitState: {
        type: Boolean,
        required: true,
        default: true
    },
    percentageIncreaseState: {
        type: Number,
        required: true,
        default: 3
    },
    assetId: {
        type: String,
        required: true,
        index: true, // Adding an index for faster queries on assetId
    },
    assetBalanceAtCreation: {
        type: Number,
        required: true
    },
    assetBalanceAtCreationUSD: {
        type: Number,
        required: true
    },
    assetPriceAtCreation: {
        type: Number,
        required: true
    },
    assetQuantityAtCreation: {
        type: Number,
        required: true
    },
    assetQuantityUSD: {
        type: Number,
        required: true
    },
    autotradestrategies: [],
    graphData: [],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

const AutoTrade = mongoose.model("AutoTrade", autoTradeSchema);

module.exports = AutoTrade;