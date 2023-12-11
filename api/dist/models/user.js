"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phonenumber: {
    type: String,
    required: true,
    unique: true
  },
  anonId: {
    type: String,
    required: true,
    unique: true
  },
  verified: {
    type: Boolean,
    "default": false
  },
  online: {
    type: Boolean,
    "default": false
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    "default": ''
  },
  keytoken: {
    type: String
  },
  customFields: {},
  marginbtcaddress: {
    type: String,
    "default": ''
  },
  spotbtcaddress: {
    type: String,
    "default": ''
  },
  accountplan: {
    type: String,
    "default": 'Basic'
  },
  warnings: [{
    message: String,
    btnText: String,
    date: {
      type: Date,
      "default": Date.now
    }
  }],
  notifications: [{
    label: String,
    description: String,
    time: {
      type: Date,
      "default": Date.now
    }
  }],
  transactionFeePercentage: {
    type: Number,
    "default": 1
  }
});
var User = mongoose.model('User', userSchema);
module.exports = User;