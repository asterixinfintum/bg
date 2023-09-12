"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _user = _interopRequireDefault(require("../models/user"));
var _wallet = _interopRequireDefault(require("../models/wallet"));
var _uniqueIdGenerate = _interopRequireDefault(require("../utils/uniqueIdGenerate"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var signup = (0, _express["default"])();
function createWallet(type, ownerId) {
  var wallet = new _wallet["default"]({
    ownerId: ownerId,
    walletType: type
  });
  return wallet.save();
}
function createWallets(_ref) {
  var ownerId = _ref.ownerId;
  var walletTypes = ["fiat/spot", "margin", "defi", "tokenized stocks", "bot trading", "bonus"];
  return new Promise(function (resolve, reject) {
    var promises = walletTypes.map(function (type) {
      return createWallet(type, ownerId);
    });
    return Promise.all(promises).then(function (createdWallets) {
      resolve(createdWallets);
    })["catch"](function (error) {
      console.log(error, 'error creating wallets');
    });
  });
}
signup.post('/register', function (req, res) {
  var receivedCredentials = req.body;
  var user = new _user["default"](receivedCredentials);
  var payload = {
    _id: user._id,
    email: user.email
  };
  var token = _jsonwebtoken["default"].sign(payload, process.env.secretKeyJWT);
  user.anonId = (0, _uniqueIdGenerate["default"])();
  user.token = token;
  user.save().then(function (_ref2) {
    var email = _ref2.email,
      phonenumber = _ref2.phonenumber,
      anonId = _ref2.anonId,
      _id = _ref2._id;
    createWallets({
      ownerId: _id
    }).then(function (createdWallets) {
      console.log("Wallets created:", createdWallets);
    })["catch"](function (error) {
      console.error("Error creating wallets:", error);
    });
    res.json({
      message: 'Credentials saved successfully.',
      token: token,
      userData: {
        email: email,
        phonenumber: phonenumber,
        anonId: anonId,
        _id: _id
      }
    });
  })["catch"](function (error) {
    console.error('Error saving credentials:', error);
    res.status(500).json({
      error: 'An error occurred while saving credentials.'
    });
  });
});
var _default = signup;
exports["default"] = _default;