const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
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
    default: false, 
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    default: ''
  },
  keytoken: {
    type: String,
  },
  customFields: {},
  warnings: [
    {
      message: String,
      btnText: String,
      date: { type: Date, default: Date.now }
    }
  ],
  notifications: [
    {
      label: String,
      description: String,
      time: { type: Date, default: Date.now }
    }
  ],
  transactionFeePercentage: {
    type: Number,
    default: 1
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;