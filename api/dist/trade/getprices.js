"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _asset = _interopRequireDefault(require("../models/asset"));
var _pricehistory = _interopRequireDefault(require("../models/pricehistory"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function convertToFloat(str) {
  return parseFloat(str.replace(/,/g, ''));
}
function calculatePercentageDifference(value1, value2) {
  var valueoneflt = convertToFloat(value1);
  var valuetwoflt = convertToFloat(value2);
  var difference = Math.abs(valueoneflt - valuetwoflt);
  var average = (valueoneflt + valuetwoflt) / 2;
  return difference / average * 100;
}

/**
 * Updates the price history of an asset.
 * @param {Object} asset - The asset object to update.
 */
function updatepricehistory(_x, _x2) {
  return _updatepricehistory.apply(this, arguments);
}
function _updatepricehistory() {
  _updatepricehistory = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(asset, date) {
    var assetinfo, newpricehistory;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(!asset || typeof asset.price === 'undefined')) {
            _context.next = 2;
            break;
          }
          throw new Error('Invalid asset or price');
        case 2:
          _context.prev = 2;
          _context.next = 5;
          return _asset["default"].findById(asset._id);
        case 5:
          assetinfo = _context.sent;
          //console.log(assetinfo, date);
          newpricehistory = new _pricehistory["default"]({
            asset: assetinfo._id,
            price: assetinfo.price,
            datetime: date
          });
          _context.next = 9;
          return newpricehistory.save();
        case 9:
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          console.error('Failed to update price history:', _context.t0);
          // Handle the error or rethrow it
          throw _context.t0;
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 11]]);
  }));
  return _updatepricehistory.apply(this, arguments);
}
function getprices(_x3) {
  return _getprices.apply(this, arguments);
}
function _getprices() {
  _getprices = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(date) {
    var stocks, cryptos, commodities, stockUpdatePromises, cryptoUpdatePromises, commodityUpdatePromises;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _asset["default"].find({
            assetType: 'stock'
          });
        case 3:
          stocks = _context2.sent;
          _context2.next = 6;
          return _asset["default"].find({
            assetType: 'crypto'
          });
        case 6:
          cryptos = _context2.sent;
          _context2.next = 9;
          return _asset["default"].find({
            assetType: 'commodity'
          });
        case 9:
          commodities = _context2.sent;
          // Process stocks and cryptos in parallel with controlled concurrency
          stockUpdatePromises = stocks.map(function (stock) {
            return updatestockprice(stock, date);
          });
          cryptoUpdatePromises = cryptos.map(function (crypto) {
            return updatecryptoprice(crypto, date);
          });
          commodityUpdatePromises = commodities.map(function (commodity) {
            return updatecommodityprice(commodity, date);
          });
          _context2.next = 15;
          return Promise.all([].concat(_toConsumableArray(stockUpdatePromises), _toConsumableArray(cryptoUpdatePromises), _toConsumableArray(commodityUpdatePromises)));
        case 15:
          _context2.next = 20;
          break;
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          console.error('Error in getPrices:', _context2.t0);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return _getprices.apply(this, arguments);
}
function updatecryptoprice(_x4, _x5) {
  return _updatecryptoprice.apply(this, arguments);
}
function _updatecryptoprice() {
  _updatecryptoprice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(asset, date) {
    var symbol, url, response, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          symbol = "".concat(asset.symbol, "/USD"); // Assuming cryptoAsset.symbol is something like 'BTC'
          if (!(asset.symbol === 'USD')) {
            _context3.next = 6;
            break;
          }
          _context3.next = 5;
          return updatepricehistory(asset, date);
        case 5:
          return _context3.abrupt("return", _context3.sent);
        case 6:
          url = "".concat(process.env.TBASE, "/exchange_rate?symbol=").concat(symbol, "&apikey=").concat(process.env.TBASEK, "&source=docs");
          _context3.next = 9;
          return (0, _nodeFetch["default"])(url);
        case 9:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 12;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 12:
          _context3.next = 14;
          return response.json();
        case 14:
          result = _context3.sent;
          if (!(result.status === 'error')) {
            _context3.next = 17;
            break;
          }
          throw new Error(result.message);
        case 17:
          asset.price = result.rate;
          _context3.next = 20;
          return asset.save();
        case 20:
          _context3.next = 22;
          return updatepricehistory(asset, date);
        case 22:
          _context3.next = 27;
          break;
        case 24:
          _context3.prev = 24;
          _context3.t0 = _context3["catch"](0);
          console.error("Error updating crypto asset:", asset.symbol, _context3.t0);
        case 27:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 24]]);
  }));
  return _updatecryptoprice.apply(this, arguments);
}
function updatestockprice(_x6, _x7) {
  return _updatestockprice.apply(this, arguments);
}
function _updatestockprice() {
  _updatestockprice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(asset, date) {
    var url, response, result;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          url = "".concat(process.env.TBASE, "/price?symbol=").concat(asset.symbol, "&apikey=").concat(process.env.TBASEK, "&source=docs");
          _context4.next = 4;
          return (0, _nodeFetch["default"])(url);
        case 4:
          response = _context4.sent;
          if (response.ok) {
            _context4.next = 7;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 7:
          _context4.next = 9;
          return response.json();
        case 9:
          result = _context4.sent;
          asset.price = result.price;
          _context4.next = 13;
          return asset.save();
        case 13:
          _context4.next = 15;
          return updatepricehistory(asset, date);
        case 15:
          _context4.next = 21;
          break;
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](0);
          asset.faileddatafetch = true;
          console.error("Error updating stock:", asset.symbol, _context4.t0);
        case 21:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return _updatestockprice.apply(this, arguments);
}
function updatecommodityprice(_x8, _x9) {
  return _updatecommodityprice.apply(this, arguments);
}
function _updatecommodityprice() {
  _updatecommodityprice = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(asset, date) {
    var url, response, result, data, assetinfo;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          url = "".concat(process.env.ALKSTOCKURL, "/query?function=").concat(asset.symbol, "&interval=daily&apikey=").concat(process.env.ALK);
          _context5.next = 4;
          return (0, _nodeFetch["default"])(url);
        case 4:
          response = _context5.sent;
          if (response.ok) {
            _context5.next = 7;
            break;
          }
          throw new Error("HTTP error! status: ".concat(response.status));
        case 7:
          _context5.next = 9;
          return response.json();
        case 9:
          result = _context5.sent;
          data = result.data;
          if (!data) {
            _context5.next = 19;
            break;
          }
          if (!(data[0].value !== '.')) {
            _context5.next = 19;
            break;
          }
          assetinfo = {
            price: data[0].value
          };
          asset.price = assetinfo.price;
          _context5.next = 17;
          return asset.save();
        case 17:
          _context5.next = 19;
          return updatepricehistory(asset, date);
        case 19:
          _context5.next = 24;
          break;
        case 21:
          _context5.prev = 21;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
        case 24:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 21]]);
  }));
  return _updatecommodityprice.apply(this, arguments);
}
var _default = getprices;
exports["default"] = _default;