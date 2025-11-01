"use strict";

var _pricehistory = _interopRequireDefault(require("./pricehistory"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function formatDateToString(dateString) {
  var date = new Date(dateString);
  var year = date.getFullYear();
  var month = (date.getMonth() + 1).toString().padStart(2, '0'); // months are 0-indexed
  var day = date.getDate().toString().padStart(2, '0');
  var hours = date.getHours().toString().padStart(2, '0');
  var minutes = date.getMinutes().toString().padStart(2, '0');
  return "".concat(year, "-").concat(month, "-").concat(day, " ").concat(hours, ":").concat(minutes);
}
var assetSchema = new Schema({
  name: {
    type: String,
    required: true,
    index: true,
    "default": ''
  },
  coin: {
    type: String,
    required: true,
    index: true,
    "default": ''
  },
  symbol: {
    type: String,
    required: true,
    index: true,
    "default": ''
  },
  assetType: {
    type: String,
    required: true,
    index: true,
    "default": ''
  },
  price: {
    type: String,
    required: true,
    index: true,
    "default": ''
  },
  image: {
    type: String,
    required: true,
    index: true
  },
  pricehistory: {
    type: Array,
    "default": []
  },
  faileddatafetch: {
    type: Boolean,
    "default": false
  },
  pricechange: {
    type: String
  },
  listed: {
    type: Boolean,
    "default": true
  }
});
assetSchema.methods.gettwentyfourhrhigh = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(_id) {
    var date24HoursAgo, dateString24HoursAgo, highestEntry;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          date24HoursAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
          dateString24HoursAgo = date24HoursAgo.toISOString().slice(0, 16).replace('T', ' ');
          _context.n = 1;
          return _pricehistory["default"].findOne({
            asset: this._id,
            datetime: {
              $gte: dateString24HoursAgo
            }
          }).sort({
            price: -1
          });
        case 1:
          highestEntry = _context.v;
          if (!highestEntry) {
            _context.n = 2;
            break;
          }
          return _context.a(2, highestEntry);
        case 2:
          return _context.a(2, null);
      }
    }, _callee, this);
  }));
  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
assetSchema.methods.gettwentyfourhrlow = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(_id) {
    var date24HoursAgo, dateString24HoursAgo, lowestEntry;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          date24HoursAgo = new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
          dateString24HoursAgo = date24HoursAgo.toISOString().slice(0, 16).replace('T', ' ');
          _context2.n = 1;
          return _pricehistory["default"].findOne({
            asset: this._id,
            datetime: {
              $gte: dateString24HoursAgo
            }
          }).sort({
            price: 1
          });
        case 1:
          lowestEntry = _context2.v;
          if (!lowestEntry) {
            _context2.n = 2;
            break;
          }
          return _context2.a(2, lowestEntry);
        case 2:
          return _context2.a(2, null);
      }
    }, _callee2, this);
  }));
  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}();
assetSchema.methods.gettwentyfourhrchange = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
  var latestEntry, latestEntryDate, date24HoursAgo, entry24HoursAgo, percentageChange;
  return _regenerator().w(function (_context3) {
    while (1) switch (_context3.n) {
      case 0:
        _context3.n = 1;
        return _pricehistory["default"].findOne({
          asset: this._id
        }).sort({
          datetime: -1
        });
      case 1:
        latestEntry = _context3.v;
        if (latestEntry) {
          _context3.n = 2;
          break;
        }
        return _context3.a(2, null);
      case 2:
        latestEntryDate = new Date(latestEntry.datetime);
        date24HoursAgo = new Date(latestEntryDate.getTime() - 24 * 60 * 60 * 1000);
        _context3.n = 3;
        return _pricehistory["default"].findOne({
          asset: this._id,
          datetime: formatDateToString(date24HoursAgo)
        });
      case 3:
        entry24HoursAgo = _context3.v;
        if (!entry24HoursAgo) {
          _context3.n = 4;
          break;
        }
        percentageChange = (latestEntry.price - entry24HoursAgo.price) / entry24HoursAgo.price * 100;
        return _context3.a(2, percentageChange);
      case 4:
        return _context3.a(2, null);
    }
  }, _callee3, this);
}));
var Asset = mongoose.model('asset', assetSchema);
module.exports = Asset;