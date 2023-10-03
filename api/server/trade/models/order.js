const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import executebuy from './functions/executebuy';
import executesell from './functions/executesell';

const orderSchema = new Schema({
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
    oppstasstId: {
        type: String,
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
    type: {
        type: String,
        enum: ['market', 'limit', 'stop'],
        required: true
    },
    side: {
        type: String,
        enum: ['buy', 'sell'],
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    triggerPrice: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true
    },
    orderAmount: {
        type: Number,
        required: true
    },
    filled: {
        type: Number,
        default: 0
    },
    triggerConditions: {
        type: String,  // This can be further detailed based on the specific conditions you have in mind.
        default: null
    },
    status: {
        type: String,
        enum: ['executed', 'canceled', 'pending', 'partially filled'],
        required: true,
        default: 'pending'
    },
    ltstExecPrice: {
        type: Number,
        default: null  // This will be null until the order is executed, at which point it will be set to the execution price.
    },
    wallet: {
        type: String,
        required: true
    }
});

orderSchema.methods.cancel = async function () {
    this.status = 'canceled';
    this.save();
}
orderSchema.methods.executebuy = executebuy;
orderSchema.methods.executesell = executesell;

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
