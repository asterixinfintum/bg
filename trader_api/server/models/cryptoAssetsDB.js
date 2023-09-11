const mongoose = require('mongoose');
const { Schema } = mongoose;

const cryptoAssetsDBSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  coin: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  symbol: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  price: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  time: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  ts: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  dailyChange: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  supportBorrow: {
    type: Boolean,
    required: true,
    default: true,
  },
  networkList: [Schema.Types.Mixed], // Using Mixed type for the networkList array
  open: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  low: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  high: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  close: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  quantity: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  amount: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  tradeCount: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  startTime: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  closeTime: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  displayName: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  bid: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  bidQuantity: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  ask: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  askQuantity: {
    type: String,
    required: true,
    index: true,
    default: '',
  },
  previousPrice: {
    type: String,
    required: true,
    default: 'none'
  },
  priceChanges: [{
    pricechange: {
      type: Number,
      required: true
    },
    updated: {
      type: Date,
      required: true,
      default: Date.now,
    }
  }]
});

const CryptoAssetsDB = mongoose.model('CryptoAssetsDB', cryptoAssetsDBSchema);

module.exports = CryptoAssetsDB;