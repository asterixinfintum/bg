const mongoose = require('mongoose');

const { Schema } = mongoose;

const walletSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true, // Adding an index for faster queries on ownerId
    },
    walletType: {
        type: String,
        required: true,
        enum: ["fiat/spot", "margin", "defi", "tokenized stocks", "bot trading", "bonus"]
    }
});

const Wallet = mongoose.model('Wallet', walletSchema);

module.exports = Wallet;