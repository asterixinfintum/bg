"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var PinSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  pin: {
    type: String,
    required: true
  }
});
var Pin = mongoose.model('Pin', PinSchema);
module.exports = Pin;