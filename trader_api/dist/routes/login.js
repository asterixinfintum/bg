"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _user = _interopRequireDefault(require("../models/user"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var login = (0, _express["default"])();
login.post('/login', function (req, res) {
  var _req$body = req.body,
    email = _req$body.email,
    password = _req$body.password;
  _user["default"].findOne({
    email: email,
    password: password
  }, function (err, user) {
    if (err || !user) {
      return res.sendStatus(401); // Unauthorized
    }

    var payload = {
      _id: user._id,
      email: user.email
    };
    var token = _jsonwebtoken["default"].sign(payload, process.env.secretKeyJWT);
    user.token = token;
    user.save().then(function (_ref) {
      var email = _ref.email,
        phonenumber = _ref.phonenumber,
        anonId = _ref.anonId,
        _id = _ref._id;
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
});
var _default = login;
exports["default"] = _default;