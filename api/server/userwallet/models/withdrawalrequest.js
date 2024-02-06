import mongoose from 'mongoose';

const withdrawalReqSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: true
    },
    assetid: {
        type: String,
        required: true
    },
    walletid: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    amountusd: {
        type: String,
        required: true
    },
    bank: {
        type: String,
        required: true
    },
    account: {
        type: String,
        required: true
    },
});

const withdrawalReq = mongoose.model('withdrawalReq', withdrawalReqSchema);

module.exports = withdrawalReq;