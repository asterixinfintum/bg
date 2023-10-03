const mongoose = require('mongoose');

const { Schema } = mongoose;

const TxnSchema = new Schema({
    assetid: {
        type: String,
        required: true,
        min: 0, // Ensuring the balanceAmount is non-negative
    },
    type: {
        type: String,
        required: true,
        enum: ["deposit", "withdrawal", "swap", "trade", "transfer"]
    },
    notiftxt: {
        type: String,
        required: true //text to display for transaction
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const Txn = mongoose.model('Txn', TxnSchema);

module.exports = Txn;