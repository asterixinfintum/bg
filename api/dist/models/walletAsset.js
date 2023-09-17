"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var walletAssetSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true // Adding an index for faster queries on ownerId
  },

  walletId: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true // Adding an index for faster queries on ownerId
  },

  assetdb_id: {
    type: Schema.Types.ObjectId,
    required: true
  },
  assetType: {
    type: String,
    "enum": ["crypto", "stock", "fiat", "other"]
  },
  balanceinWallet: {
    type: Number,
    required: true,
    "default": 0,
    min: 0 // Ensuring the balanceAmount is non-negative
  },

  balanceHistory: [{
    balance: {
      type: Number,
      required: true,
      min: 0 // Ensuring the balanceAmount is non-negative
    },

    transactionType: {
      type: String,
      required: true,
      "enum": ["deposit", "transfer", "conversion", "autotrade creation", "other"]
    },
    updated: {
      type: Date,
      "default": Date.now
    }
  }],
  updated: {
    type: Date,
    "default": Date.now
  }
});
var WalletAsset = mongoose.model('WalletAsset', walletAssetSchema);
module.exports = WalletAsset;