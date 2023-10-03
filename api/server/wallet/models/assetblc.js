const mongoose = require('mongoose');

const { Schema } = mongoose;

const assetBlcSchema = new Schema({
    assetid: {
        type: String,
        required: true,
        min: 0, // Ensuring the balanceAmount is non-negative
    },
    wallet: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        required: true,
        min: 0, // Ensuring the balanceAmount is non-negative
    },
    unavailableblc: {
        type: Number,
        min: 0, // Ensuring the balanceAmount is non-negative
    },
});

assetBlcSchema.methods.increaseBalance = async function (amount) {
    const updatedblc = this.balance + amount;
    this.balance = updatedblc;
    this.save();
}

assetBlcSchema.methods.reduceBalance = async function (amount) {
    const updatedblc = this.balance - amount;
    this.balance = updatedblc;
    this.save();
}

assetBlcSchema.statics.lock = async function (_id, amount) {
    console.log(_id, amount)
}

const AssetBlc = mongoose.model('AssetBlc', assetBlcSchema);

module.exports = AssetBlc;