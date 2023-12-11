"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function authenticateToken(req, res, next) {
  var authHeader = req.headers['authorization'];
  var token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.sendStatus(401);
  }
  _jsonwebtoken["default"].verify(token, process.env.secretKeyJWT, function (err, user) {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = user;
    next();
  });
}
var _default = authenticateToken;
exports["default"] = _default;