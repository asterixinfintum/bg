"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var RegistrantSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  btcAddress: {
    type: String
  },
  // BVXt Balances
  bvxtBalance: {
    type: Number,
    "default": 0
  },
  lockedBvxtBalance: {
    type: Number,
    "default": 0
  },
  // GOVX Balances
  govxAvailableBalance: {
    type: Number,
    "default": 0
  },
  govxLockedBalance: {
    type: Number,
    "default": 0
  },
  // UTILX Balances
  utilxAvailableBalance: {
    type: Number,
    "default": 0
  },
  utilxLockedBalance: {
    type: Number,
    "default": 0
  },
  tokenHolderRewards: {
    type: Number,
    "default": 0
  },
  stakingEarnings: {
    type: Number,
    "default": 0
  },
  referralBonuses: {
    type: Number,
    "default": 0
  }
});
var Registrant = mongoose.model('Registrant', RegistrantSchema);
module.exports = Registrant;