"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var BtcAddressSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  registrantId: {
    type: String
  }
});
var BtcAddress = mongoose.model('BtcAddress', BtcAddressSchema);
module.exports = BtcAddress;