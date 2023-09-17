"use strict";

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var orderSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true // Adding an index for faster queries on ownerId
  },

  tradingPair: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    "default": Date.now
  },
  type: {
    type: String,
    required: true
  },
  side: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  timeInForce: {
    type: String
  },
  expireTime: {
    type: Date
  },
  createdAt: {
    type: Date,
    required: true,
    "default": Date.now
  },
  updatedAt: {
    type: Date
  },
  status: {
    type: String,
    required: true,
    "default": 'pending' //open, closed, cancelled
  },

  limitPrice: {
    type: Number || Boolean,
    required: true,
    "default": false
  },
  triggerPrice: {
    type: Number || Boolean,
    required: true,
    "default": false
  },
  stopLossPrice: {
    type: Number
  },
  takeProfitPrice: {
    type: Number
  },
  trailingStopDistance: {
    type: Number
  },
  scaleOutQuantity: {
    type: Number
  },
  filled: {
    type: Number
  },
  triggerConditions: [{
    condition: {
      type: String
    },
    // 'price >= 10050'
    actions: [{
      action: {
        type: String //'submitOrder'
      },

      parameters: {
        tradingPair: String,
        type: String,
        // 'market'
        side: String,
        // 'buy' or 'sell'
        quantity: Number,
        timeInForce: String // 'gtc' or 'ioc'
      }
    }]
  }],

  cancelAll: {
    type: Boolean,
    required: true,
    "default": false
  },
  closed: {
    type: Boolean,
    required: true,
    "default": false
  },
  executeIn: {
    type: Number //if it's a market trade
  },

  margin: {
    type: String
  },
  wallet: {
    type: String,
    required: true
  },
  autoTrade: {
    type: Boolean,
    required: true,
    "default": false
  },
  autoTradeStrategies: {
    type: Array,
    "default": []
  },
  autoTradeGainLoss: [{
    open: {
      type: Number,
      required: true
    },
    high: {
      type: Number,
      required: true
    },
    low: {
      type: Number,
      required: true
    },
    close: {
      type: Number,
      required: true
    },
    time: {
      type: Date,
      require: true,
      "default": Date.now()
    }
  }],
  autoTradeState: {
    type: String //loss, gain
  }
});

var Order = mongoose.model('Order', orderSchema);
module.exports = Order;