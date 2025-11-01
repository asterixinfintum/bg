"use strict";

var _asset = _interopRequireDefault(require("./asset"));
var _pricehistory = _interopRequireDefault(require("./pricehistory"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
function parseNumber(str) {
  // Remove commas from the string
  var numericString = str.replace(/,/g, '');
  // Parse the string to a floating point number
  return parseFloat(numericString);
}
function calculatePercentageChange(originalValue, newValue) {
  var difference = newValue - originalValue;
  var percentageChange = difference / originalValue * 100;
  // Format the result with a '+' sign for positive changes
  return (percentageChange > 0 ? "+" : "") + percentageChange.toFixed(2) + '%';
}
function getRandomPrice(basePrice, maxVariation) {
  // Generate a random number within the range of -maxVariation to +maxVariation
  var variation = Math.random() * maxVariation * 2 - maxVariation;

  // Add the variation to the base price and ensure the result is not negative
  var newPrice = Math.max(0, basePrice + variation).toFixed(8);
  return parseFloat(newPrice); // Convert string back to a float, with precision for small values
}
function calculateOHLC(data) {
  // Helper function to extract hour from datetime
  var getHour = function getHour(datetime) {
    var date = new Date(datetime);
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours());
  };

  // Group data by hour
  var groupedData = data.reduce(function (acc, entry) {
    var hour = getHour(entry.datetime).getTime();
    if (!acc[hour]) {
      acc[hour] = {
        prices: [],
        open: null,
        close: null
      };
    }
    acc[hour].prices.push(entry.price);
    if (acc[hour].open === null) {
      acc[hour].open = entry.price;
    }
    acc[hour].close = entry.price;
    return acc;
  }, {});

  // Calculate OHLC for each hour
  var ohlcData = Object.keys(groupedData).map(function (hour) {
    var prices = groupedData[hour].prices;
    return {
      time: parseInt(hour) / 1000,
      open: groupedData[hour].open,
      high: Math.max.apply(Math, _toConsumableArray(prices)),
      low: Math.min.apply(Math, _toConsumableArray(prices)),
      close: groupedData[hour].close
    };
  });
  return ohlcData;
}
function grouphours(subjectgroup) {
  function getBeforeColon(str) {
    return str.split(':')[0];
  }
  function returnhigh(hrgroup) {
    if (!hrgroup.length) return null;
    var highest = hrgroup[0];
    hrgroup.forEach(function (item) {
      if (item.price > highest.price) {
        highest = item;
      }
    });
    return highest;
  }
  function returnlow(hrgroup) {
    if (!hrgroup.length) return null;
    var lowest = hrgroup[0];
    hrgroup.forEach(function (item) {
      if (item.price < lowest.price) {
        lowest = item;
      }
    });
    return lowest;
  }
  function returnopen(hrgroup) {
    return hrgroup[0];
  }
  function returnclose(hrgroup) {
    return hrgroup[hrgroup.length - 1];
  }
  function convertToMilliseconds(dateTimeStr) {
    var date = new Date(dateTimeStr);
    return date.getTime();
  }
  var hourgroups = {};
  var hourgroupsarray = [];
  var _final = [];
  subjectgroup.forEach(function (item) {
    var hourgroup = getBeforeColon(item.time);
    if (!hourgroups[hourgroup]) {
      hourgroups[hourgroup] = [];
    }
    hourgroups[hourgroup].push(item);
  });
  for (var key in hourgroups) {
    hourgroupsarray.push(hourgroups[key]);
  }
  hourgroupsarray.forEach(function (hrgp) {
    var item = {
      time: convertToMilliseconds(hrgp[0].datetime),
      high: returnhigh(hrgp).price,
      low: returnlow(hrgp).price,
      open: returnopen(hrgp).price,
      close: returnclose(hrgp).price
      //basetime: hrgp[0].datetime
    };
    _final.push(item);
  });
  return _final;
}
function calculateOHLCMinute(data) {
  function getobjectkey(object, key) {
    return object["".concat(key)];
  }
  function getDateString(dateTimeStr) {
    return dateTimeStr.split(' ')[0];
  }
  function getTimeString(dateTimeStr) {
    return dateTimeStr.split(' ')[1];
  }
  var spliceddata = data.splice(-4000);
  var datetimegroups = {};
  var datekeys = [];
  spliceddata.forEach(function (spl) {
    var datekey = getDateString(spl.datetime);
    var timekey = getTimeString(spl.datetime);
    var price = spl.price;
    var datetime = spl.datetime;
    if (!datetimegroups[datekey]) {
      datetimegroups[datekey] = [];
    }
    var item = {
      day: datekey,
      time: timekey,
      price: price,
      datetime: datetime
    };
    datetimegroups[datekey].push(item);
    datekeys.push(datekey);
  });
  var uniquedatekeys = _toConsumableArray(new Set(datekeys));
  //console.log(uniquedatekeys);

  var subjectgroupone = getobjectkey(datetimegroups, uniquedatekeys[uniquedatekeys.length - 1]);
  var subjectgrouptwo = getobjectkey(datetimegroups, uniquedatekeys[uniquedatekeys.length - 2]);
  return [].concat(_toConsumableArray(grouphours(subjectgrouptwo)), _toConsumableArray(grouphours(subjectgroupone)));
}
var pairSchema = new Schema({
  pair: {
    type: String,
    required: true
  },
  baseAsset: {
    type: String,
    required: true,
    index: true // Indexing the baseAsset
  },
  baseAssetId: {
    type: String,
    required: true
  },
  baseAssetType: {
    type: String,
    index: true // Indexing the baseAssetType if needed
  },
  quoteAsset: {
    type: String,
    required: true
  },
  quoteAssetId: {
    type: String,
    required: true
  },
  quoteAssetType: {
    type: String,
    index: true // Indexing the quoteAssetType
  },
  price: {
    type: Number,
    required: true
  },
  pricedifference: {
    type: String
  },
  orders: {
    type: Array,
    "default": []
  },
  listed: {
    type: Boolean,
    "default": false
  },
  pricehistory: [],
  inview: {
    type: Boolean,
    required: true,
    "default": false
  }
});
pairSchema.methods.calculatePrice = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
  var baseAsset, quoteAsset, _t;
  return _regenerator().w(function (_context) {
    while (1) switch (_context.p = _context.n) {
      case 0:
        _context.p = 0;
        _context.n = 1;
        return _asset["default"].findById(this.baseAssetId);
      case 1:
        baseAsset = _context.v;
        _context.n = 2;
        return _asset["default"].findById(this.quoteAssetId);
      case 2:
        quoteAsset = _context.v;
        if (!(!baseAsset || !quoteAsset)) {
          _context.n = 3;
          break;
        }
        throw new Error('Assets not found');
      case 3:
        return _context.a(2, parseNumber(baseAsset.price) / parseNumber(quoteAsset.price));
      case 4:
        _context.p = 4;
        _t = _context.v;
        console.error('Error calculating price:', _t.message);
        return _context.a(2, null);
    }
  }, _callee, this, [[0, 4]]);
}));
pairSchema.methods.calculatepricedifference = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
  var baseAsset, quoteAsset, baseassetlatestpricehistory, quoteassetlatestpricehistory, baseassetlastpricehistory, quoteassetlastpricehistory, priceone, pricetwo, _t2;
  return _regenerator().w(function (_context2) {
    while (1) switch (_context2.p = _context2.n) {
      case 0:
        _context2.p = 0;
        _context2.n = 1;
        return _asset["default"].findById(this.baseAssetId);
      case 1:
        baseAsset = _context2.v;
        _context2.n = 2;
        return _asset["default"].findById(this.quoteAssetId);
      case 2:
        quoteAsset = _context2.v;
        if (!(!baseAsset || !quoteAsset)) {
          _context2.n = 3;
          break;
        }
        throw new Error('Assets not found');
      case 3:
        baseassetlatestpricehistory = baseAsset.pricehistory[0];
        quoteassetlatestpricehistory = quoteAsset.pricehistory[0];
        baseassetlastpricehistory = baseAsset.pricehistory[5];
        quoteassetlastpricehistory = quoteAsset.pricehistory[5];
        if (!(this.baseAssetType === 'commodity')) {
          _context2.n = 4;
          break;
        }
        return _context2.a(2, this.pricedifference);
      case 4:
        if (!(baseassetlatestpricehistory && quoteassetlatestpricehistory && baseassetlastpricehistory && quoteassetlastpricehistory)) {
          _context2.n = 5;
          break;
        }
        priceone = baseassetlatestpricehistory.price / quoteassetlatestpricehistory.price;
        pricetwo = baseassetlastpricehistory.price / quoteassetlastpricehistory.price;
        return _context2.a(2, calculatePercentageChange(priceone, pricetwo));
      case 5:
        return _context2.a(2, 0);
      case 6:
        _context2.n = 8;
        break;
      case 7:
        _context2.p = 7;
        _t2 = _context2.v;
        console.error('Error calculating price:', _t2.message, this.pair);
        return _context2.a(2, null);
      case 8:
        return _context2.a(2);
    }
  }, _callee2, this, [[0, 7]]);
}));
pairSchema.methods.gendumborders = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
  var _this = this;
  var getRandomValue, ordersresult, orders, pairitem, _t3;
  return _regenerator().w(function (_context4) {
    while (1) switch (_context4.p = _context4.n) {
      case 0:
        getRandomValue = function getRandomValue() {
          return Math.random() < 0.5 ? parseFloat((Math.random() * 0.009 + 0.001).toFixed(4)) : parseFloat((Math.random() * 7 + 1).toFixed(4));
        };
        ordersresult = [];
        _context4.p = 1;
        _context4.n = 2;
        return Promise.all(Array.from({
          length: 80
        }, /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(_, i) {
            var calculateprice, price, amount, total, side, dumborder;
            return _regenerator().w(function (_context3) {
              while (1) switch (_context3.n) {
                case 0:
                  _context3.n = 1;
                  return _this.calculatePrice();
                case 1:
                  calculateprice = _context3.v;
                  price = getRandomPrice(calculateprice, 1); // Ensure getRandomPrice function is defined
                  amount = getRandomValue();
                  total = amount * price; // Set 'side' based on whether 'i' is even or odd
                  side = i % 2 === 0 ? 'buy' : 'sell';
                  dumborder = {
                    price: price,
                    amount: amount,
                    total: total,
                    side: side
                  };
                  return _context3.a(2, dumborder);
              }
            }, _callee3);
          }));
          return function (_x, _x2) {
            return _ref4.apply(this, arguments);
          };
        }()));
      case 2:
        orders = _context4.v;
        ordersresult = orders;
        _context4.n = 3;
        return Pair.findOne({
          _id: this._id
        });
      case 3:
        pairitem = _context4.v;
        if (!pairitem) {
          _context4.n = 4;
          break;
        }
        pairitem.orders = ordersresult;
        _context4.n = 4;
        return pairitem.save();
      case 4:
        _context4.n = 6;
        break;
      case 5:
        _context4.p = 5;
        _t3 = _context4.v;
        console.error(_t3);
      case 6:
        return _context4.a(2);
    }
  }, _callee4, this, [[1, 5]]);
}));
pairSchema.methods.getpricehistory = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
  var baseAsset, quoteAsset, baseAssetPriceHistory, quoteAssetPriceHistory, baseAssetPriceHistoryMap, combinedPriceHistory, _t4;
  return _regenerator().w(function (_context5) {
    while (1) switch (_context5.p = _context5.n) {
      case 0:
        _context5.p = 0;
        _context5.n = 1;
        return _asset["default"].findById(this.baseAssetId);
      case 1:
        baseAsset = _context5.v;
        _context5.n = 2;
        return _asset["default"].findById(this.quoteAssetId);
      case 2:
        quoteAsset = _context5.v;
        _context5.n = 3;
        return _pricehistory["default"].find({
          asset: baseAsset._id
        });
      case 3:
        baseAssetPriceHistory = _context5.v;
        _context5.n = 4;
        return _pricehistory["default"].find({
          asset: quoteAsset._id
        });
      case 4:
        quoteAssetPriceHistory = _context5.v;
        baseAssetPriceHistoryMap = new Map();
        baseAssetPriceHistory.forEach(function (item) {
          baseAssetPriceHistoryMap.set(item.datetime, item);
        });
        combinedPriceHistory = [];
        quoteAssetPriceHistory.forEach(function (item) {
          if (baseAssetPriceHistoryMap.has(item.datetime)) {
            var data = {
              datetime: item.datetime,
              baseAssetData: baseAssetPriceHistoryMap.get(item.datetime),
              quoteAssetData: item,
              price: baseAssetPriceHistoryMap.get(item.datetime).price / item.price
            };
            combinedPriceHistory.push(data);
          }
        });
        return _context5.a(2, combinedPriceHistory);
      case 5:
        _context5.p = 5;
        _t4 = _context5.v;
        console.error(_t4);
      case 6:
        return _context5.a(2);
    }
  }, _callee5, this, [[0, 5]]);
}));
pairSchema.methods.getpricehistorycandlestick = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
  var baseAsset, quoteAsset, baseAssetPriceHistory, quoteAssetPriceHistory, baseAssetPriceHistoryMap, combinedPriceHistory, _t5;
  return _regenerator().w(function (_context6) {
    while (1) switch (_context6.p = _context6.n) {
      case 0:
        _context6.p = 0;
        _context6.n = 1;
        return _asset["default"].findById(this.baseAssetId);
      case 1:
        baseAsset = _context6.v;
        _context6.n = 2;
        return _asset["default"].findById(this.quoteAssetId);
      case 2:
        quoteAsset = _context6.v;
        _context6.n = 3;
        return _pricehistory["default"].find({
          asset: baseAsset._id
        });
      case 3:
        baseAssetPriceHistory = _context6.v;
        _context6.n = 4;
        return _pricehistory["default"].find({
          asset: quoteAsset._id
        });
      case 4:
        quoteAssetPriceHistory = _context6.v;
        baseAssetPriceHistoryMap = new Map();
        baseAssetPriceHistory.forEach(function (item) {
          baseAssetPriceHistoryMap.set(item.datetime, item);
        });
        combinedPriceHistory = [];
        quoteAssetPriceHistory.forEach(function (item) {
          if (baseAssetPriceHistoryMap.has(item.datetime)) {
            var data = {
              datetime: item.datetime,
              baseAssetData: baseAssetPriceHistoryMap.get(item.datetime),
              quoteAssetData: item,
              price: baseAssetPriceHistoryMap.get(item.datetime).price / item.price
            };
            combinedPriceHistory.push(data);
          }
        });
        return _context6.a(2, calculateOHLC(combinedPriceHistory));
      case 5:
        _context6.p = 5;
        _t5 = _context6.v;
        console.error(_t5);
      case 6:
        return _context6.a(2);
    }
  }, _callee6, this, [[0, 5]]);
}));
pairSchema.methods.getpricehistorycandlestickMins = /*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7() {
  var baseAsset, quoteAsset, baseAssetPriceHistory, quoteAssetPriceHistory, baseAssetPriceHistoryMap, combinedPriceHistory, _t6;
  return _regenerator().w(function (_context7) {
    while (1) switch (_context7.p = _context7.n) {
      case 0:
        _context7.p = 0;
        _context7.n = 1;
        return _asset["default"].findById(this.baseAssetId);
      case 1:
        baseAsset = _context7.v;
        _context7.n = 2;
        return _asset["default"].findById(this.quoteAssetId);
      case 2:
        quoteAsset = _context7.v;
        _context7.n = 3;
        return _pricehistory["default"].find({
          asset: baseAsset._id
        });
      case 3:
        baseAssetPriceHistory = _context7.v;
        _context7.n = 4;
        return _pricehistory["default"].find({
          asset: quoteAsset._id
        });
      case 4:
        quoteAssetPriceHistory = _context7.v;
        baseAssetPriceHistoryMap = new Map();
        baseAssetPriceHistory.forEach(function (item) {
          baseAssetPriceHistoryMap.set(item.datetime, item);
        });
        combinedPriceHistory = [];
        quoteAssetPriceHistory.forEach(function (item) {
          if (baseAssetPriceHistoryMap.has(item.datetime)) {
            var data = {
              datetime: item.datetime,
              baseAssetData: baseAssetPriceHistoryMap.get(item.datetime),
              quoteAssetData: item,
              price: baseAssetPriceHistoryMap.get(item.datetime).price / item.price
            };
            combinedPriceHistory.push(data);
          }
        });
        return _context7.a(2, calculateOHLCMinute(combinedPriceHistory));
      case 5:
        _context7.p = 5;
        _t6 = _context7.v;
        console.error(_t6);
      case 6:
        return _context7.a(2);
    }
  }, _callee7, this, [[0, 5]]);
}));
var Pair = mongoose.model('Pair', pairSchema);
module.exports = Pair;