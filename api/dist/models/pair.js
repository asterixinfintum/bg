"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _asset = _interopRequireDefault(require("./asset"));
var _pricehistory = _interopRequireDefault(require("./pricehistory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
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
function getDateString(timestamp) {
  // Create a new Date object using the timestamp
  var date = new Date(timestamp);

  // Format the date to YYYY-MM-DD HH:MM
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2); // Months are zero-based
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
  return formattedDate;
}
function groupByHourlyIntervals(dataArray) {
  // Helper function to round down time to the nearest hour and use it as a group key
  function getHourKey(time) {
    var date = new Date(time);
    date.setMinutes(0, 0, 0); // Reset minutes, seconds, and milliseconds
    //console.log(date.getTime())
    return date.getTime();
  }

  // Object to hold the groups
  var groups = {};

  // Group items by their rounded down time
  dataArray.forEach(function (item) {
    var key = getHourKey(item.time);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
  });

  // Convert groups to arrays
  return Object.values(groups);
}
function processGroupedData(groupedData) {
  return groupedData.map(function (group) {
    // Initialize variables to store the highest and lowest price objects
    var highestPriceObj = group[0];
    var lowestPriceObj = group[0];

    // Iterate over each item in the group
    group.forEach(function (item) {
      if (item.price > highestPriceObj.price) {
        highestPriceObj = item;
      }
      if (item.price < lowestPriceObj.price) {
        lowestPriceObj = item;
      }
    });

    // Get the first and last items in the group
    var firstItem = group[0];
    var lastItem = group[group.length - 1];

    // Return the results for this group
    return {
      highestPriceObj: highestPriceObj,
      lowestPriceObj: lowestPriceObj,
      firstItem: firstItem,
      lastItem: lastItem
    };
  });
}
function calculateOHLCMinute(data) {
  var dataarray = data.slice(-1100);
  var endTime = dataarray.slice(-1)[0].datetime;

  //console.log(dataarray, endTime)
  var dateTime = new Date(endTime);

  // Subtract 24 hours (1 day) - there are 24 hours in a day, 60 minutes in an hour, 60 seconds in a minute, and 1000 milliseconds in a second
  dateTime.setTime(dateTime.getTime() - 24 * 60 * 60 * 1000);

  // Format the date back to a string if needed
  var startTime = dateTime.toISOString().replace('T', ' ').substring(0, 16);
  var values = [];
  dataarray.forEach(function (item) {
    var itm = {
      time: new Date(item.datetime).getTime(),
      originaltime: item.datetime,
      price: item.price
    };
    values.push(itm);
    /*if (!values.length) {
        console.log('hey')
        //values.push()
    } else {
        console.log('yo')
    }*/
    //console.log(item.datetime, new Date(item.datetime), new Date(item.datetime).getTime(), getDateString(new Date(item.datetime).getTime()), item.price);
  });

  var groupedvalues = groupByHourlyIntervals(values);
  var processedGroupData = processGroupedData(groupedvalues);
  var _final = [];

  //console.log(processedGroupData);
  processedGroupData.forEach(function (item) {
    var itemobj = {
      time: item.lastItem.time,
      open: item.firstItem.price,
      high: item.highestPriceObj.price,
      low: item.lowestPriceObj.price,
      close: item.lastItem.price
    };
    _final.push(itemobj);
  });
  console.log(_final.length);
  return _final;

  /*return {
          //time: formattedDate,
          open: groupedData[interval].open,
          high: Math.max(...prices),
          low: Math.min(...prices),
          close: groupedData[interval].close
      };*/

  //console.log(ohlcData);

  //return ohlcData;
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
  orders: {
    type: Array,
    "default": []
  },
  pricehistory: [],
  inview: {
    type: Boolean,
    required: true,
    "default": false
  }
});
pairSchema.methods.calculatePrice = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
  var baseAsset, quoteAsset;
  return _regeneratorRuntime().wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        _context.next = 3;
        return _asset["default"].findById(this.baseAssetId);
      case 3:
        baseAsset = _context.sent;
        _context.next = 6;
        return _asset["default"].findById(this.quoteAssetId);
      case 6:
        quoteAsset = _context.sent;
        if (!(!baseAsset || !quoteAsset)) {
          _context.next = 9;
          break;
        }
        throw new Error('Assets not found');
      case 9:
        console.log(baseAsset.price / quoteAsset.price, baseAsset.price, quoteAsset.price, this.pair);
        return _context.abrupt("return", baseAsset.price / quoteAsset.price);
      case 13:
        _context.prev = 13;
        _context.t0 = _context["catch"](0);
        console.error('Error calculating price:', _context.t0.message);
        return _context.abrupt("return", null);
      case 17:
      case "end":
        return _context.stop();
    }
  }, _callee, this, [[0, 13]]);
}));
pairSchema.methods.calculatepricedifference = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var baseAsset, quoteAsset, baseassetlatestpricehistory, quoteassetlatestpricehistory, baseassetlastpricehistory, quoteassetlastpricehistory, priceone, pricetwo;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        _context2.prev = 0;
        _context2.next = 3;
        return _asset["default"].findById(this.baseAssetId);
      case 3:
        baseAsset = _context2.sent;
        _context2.next = 6;
        return _asset["default"].findById(this.quoteAssetId);
      case 6:
        quoteAsset = _context2.sent;
        if (!(!baseAsset || !quoteAsset)) {
          _context2.next = 9;
          break;
        }
        throw new Error('Assets not found');
      case 9:
        baseassetlatestpricehistory = baseAsset.pricehistory[0];
        quoteassetlatestpricehistory = quoteAsset.pricehistory[0];
        baseassetlastpricehistory = baseAsset.pricehistory[5];
        quoteassetlastpricehistory = quoteAsset.pricehistory[5];
        if (!(baseassetlatestpricehistory && quoteassetlatestpricehistory && baseassetlastpricehistory && quoteassetlastpricehistory)) {
          _context2.next = 19;
          break;
        }
        priceone = baseassetlatestpricehistory.price / quoteassetlatestpricehistory.price;
        pricetwo = baseassetlastpricehistory.price / quoteassetlastpricehistory.price;
        return _context2.abrupt("return", calculatePercentageChange(priceone, pricetwo));
      case 19:
        console.log('check here');
        return _context2.abrupt("return", 0);
      case 21:
        _context2.next = 27;
        break;
      case 23:
        _context2.prev = 23;
        _context2.t0 = _context2["catch"](0);
        console.error('Error calculating price:', _context2.t0.message, this.pair);
        return _context2.abrupt("return", null);
      case 27:
      case "end":
        return _context2.stop();
    }
  }, _callee2, this, [[0, 23]]);
}));
pairSchema.methods.gendumborders = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
  var _this = this;
  var getRandomValue, ordersresult, orders, pairitem;
  return _regeneratorRuntime().wrap(function _callee4$(_context4) {
    while (1) switch (_context4.prev = _context4.next) {
      case 0:
        getRandomValue = function getRandomValue() {
          return Math.random() < 0.5 ? parseFloat((Math.random() * 0.009 + 0.001).toFixed(4)) : parseFloat((Math.random() * 7 + 1).toFixed(4));
        };
        ordersresult = [];
        _context4.prev = 2;
        _context4.next = 5;
        return Promise.all(Array.from({
          length: 80
        }, /*#__PURE__*/function () {
          var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(_, i) {
            var calculateprice, price, amount, total, side, dumborder;
            return _regeneratorRuntime().wrap(function _callee3$(_context3) {
              while (1) switch (_context3.prev = _context3.next) {
                case 0:
                  _context3.next = 2;
                  return _this.calculatePrice();
                case 2:
                  calculateprice = _context3.sent;
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
                  return _context3.abrupt("return", dumborder);
                case 9:
                case "end":
                  return _context3.stop();
              }
            }, _callee3);
          }));
          return function (_x, _x2) {
            return _ref4.apply(this, arguments);
          };
        }()));
      case 5:
        orders = _context4.sent;
        ordersresult = orders;
        _context4.next = 9;
        return Pair.findOne({
          _id: this._id
        });
      case 9:
        pairitem = _context4.sent;
        if (!pairitem) {
          _context4.next = 14;
          break;
        }
        pairitem.orders = ordersresult;
        _context4.next = 14;
        return pairitem.save();
      case 14:
        _context4.next = 19;
        break;
      case 16:
        _context4.prev = 16;
        _context4.t0 = _context4["catch"](2);
        console.error(_context4.t0);
      case 19:
      case "end":
        return _context4.stop();
    }
  }, _callee4, this, [[2, 16]]);
}));
pairSchema.methods.getpricehistory = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
  var baseAsset, quoteAsset, baseAssetPriceHistory, quoteAssetPriceHistory, baseAssetPriceHistoryMap, combinedPriceHistory;
  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        _context5.prev = 0;
        _context5.next = 3;
        return _asset["default"].findById(this.baseAssetId);
      case 3:
        baseAsset = _context5.sent;
        _context5.next = 6;
        return _asset["default"].findById(this.quoteAssetId);
      case 6:
        quoteAsset = _context5.sent;
        _context5.next = 9;
        return _pricehistory["default"].find({
          asset: baseAsset._id
        });
      case 9:
        baseAssetPriceHistory = _context5.sent;
        _context5.next = 12;
        return _pricehistory["default"].find({
          asset: quoteAsset._id
        });
      case 12:
        quoteAssetPriceHistory = _context5.sent;
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
        return _context5.abrupt("return", combinedPriceHistory);
      case 20:
        _context5.prev = 20;
        _context5.t0 = _context5["catch"](0);
        console.error(_context5.t0);
      case 23:
      case "end":
        return _context5.stop();
    }
  }, _callee5, this, [[0, 20]]);
}));
pairSchema.methods.getpricehistorycandlestick = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
  var baseAsset, quoteAsset, baseAssetPriceHistory, quoteAssetPriceHistory, baseAssetPriceHistoryMap, combinedPriceHistory;
  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
    while (1) switch (_context6.prev = _context6.next) {
      case 0:
        _context6.prev = 0;
        _context6.next = 3;
        return _asset["default"].findById(this.baseAssetId);
      case 3:
        baseAsset = _context6.sent;
        _context6.next = 6;
        return _asset["default"].findById(this.quoteAssetId);
      case 6:
        quoteAsset = _context6.sent;
        _context6.next = 9;
        return _pricehistory["default"].find({
          asset: baseAsset._id
        });
      case 9:
        baseAssetPriceHistory = _context6.sent;
        _context6.next = 12;
        return _pricehistory["default"].find({
          asset: quoteAsset._id
        });
      case 12:
        quoteAssetPriceHistory = _context6.sent;
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
        return _context6.abrupt("return", calculateOHLC(combinedPriceHistory));
      case 20:
        _context6.prev = 20;
        _context6.t0 = _context6["catch"](0);
        console.error(_context6.t0);
      case 23:
      case "end":
        return _context6.stop();
    }
  }, _callee6, this, [[0, 20]]);
}));
pairSchema.methods.getpricehistorycandlestickMins = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
  var baseAsset, quoteAsset, baseAssetPriceHistory, quoteAssetPriceHistory, baseAssetPriceHistoryMap, combinedPriceHistory;
  return _regeneratorRuntime().wrap(function _callee7$(_context7) {
    while (1) switch (_context7.prev = _context7.next) {
      case 0:
        _context7.prev = 0;
        _context7.next = 3;
        return _asset["default"].findById(this.baseAssetId);
      case 3:
        baseAsset = _context7.sent;
        _context7.next = 6;
        return _asset["default"].findById(this.quoteAssetId);
      case 6:
        quoteAsset = _context7.sent;
        _context7.next = 9;
        return _pricehistory["default"].find({
          asset: baseAsset._id
        });
      case 9:
        baseAssetPriceHistory = _context7.sent;
        _context7.next = 12;
        return _pricehistory["default"].find({
          asset: quoteAsset._id
        });
      case 12:
        quoteAssetPriceHistory = _context7.sent;
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
        return _context7.abrupt("return", calculateOHLCMinute(combinedPriceHistory));
      case 20:
        _context7.prev = 20;
        _context7.t0 = _context7["catch"](0);
        console.error(_context7.t0);
      case 23:
      case "end":
        return _context7.stop();
    }
  }, _callee7, this, [[0, 20]]);
}));
var Pair = mongoose.model('Pair', pairSchema);
module.exports = Pair;