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

function convertToFloat(str) {
    return parseFloat(str.replace(/,/g, ''));
}

assetBlcSchema.methods.increaseBalance = async function (amount) {
    try {
        const balanceupdate = this.balance + convertToFloat(`${amount}`);
        this.balance = balanceupdate;
        this.save();
    } catch (error) {
        // Handle any errors that occur during the save
        console.error('Error updating balance:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
};

assetBlcSchema.methods.reduceBalance = async function (amount) {
    try {
        const balanceupdate = this.balance - convertToFloat(`${amount}`);
        this.balance = balanceupdate;
        this.save();
    } catch (error) {
        // Handle any errors that occur during the save
        console.error('Error updating balance:', error);
        throw error; // Re-throw the error to be handled by the caller
    }
}

assetBlcSchema.statics.lock = async function (_id, amount) {
    console.log(_id, amount)
}

const AssetBlc = mongoose.model('AssetBlc', assetBlcSchema);

module.exports = AssetBlc;