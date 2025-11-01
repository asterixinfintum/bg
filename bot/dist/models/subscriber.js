"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var subscriberSchema = new _mongoose["default"].Schema({
  userId: {
    type: Number,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  }
});
var _default = exports["default"] = _mongoose["default"].model('Subscriber', subscriberSchema);