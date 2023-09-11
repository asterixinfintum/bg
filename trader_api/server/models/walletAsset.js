const mongoose = require('mongoose');

const { Schema } = mongoose;

const walletAssetSchema = new Schema({
    ownerId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true, // Adding an index for faster queries on ownerId
    },
    walletId: {
        type: Schema.Types.ObjectId,
        required: true,
        index: true, // Adding an index for faster queries on ownerId
    },
    assetdb_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    assetType: {
        type: String,
        enum: ["crypto", "stock", "fiat", "other"]
    },
    balanceinWallet: {
        type: Number,
        required: true,
        default: 0,
        min: 0, // Ensuring the balanceAmount is non-negative
    },
    balanceHistory: [
        {  
            balance: {
                type: Number,
                required: true,
                min: 0, // Ensuring the balanceAmount is non-negative
            },
            transactionType: {
                type: String,
                required: true,
                enum: ["deposit", "transfer", "conversion", "other"],
            },
            updated: {
                type: Date,
                default: Date.now,
            }
        }
    ],
    updated: {
        type: Date,
        default: Date.now,
    }
});

const WalletAsset = mongoose.model('WalletAsset', walletAssetSchema);

module.exports = WalletAsset;