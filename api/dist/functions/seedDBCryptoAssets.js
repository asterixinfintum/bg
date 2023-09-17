"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _cryptoAsset = _interopRequireDefault(require("../models/cryptoAsset"));
var _cryptoAssetPrice = _interopRequireDefault(require("../models/cryptoAssetPrice"));
var _cryptoAssetTicker = _interopRequireDefault(require("../models/cryptoAssetTicker"));
var _cryptoAssetsDB = _interopRequireDefault(require("../models/cryptoAssetsDB"));
var _getCryptoAssets = _interopRequireDefault(require("./getCryptoAssets"));
var _getCryptoAssetsTickers = _interopRequireDefault(require("./getCryptoAssetsTickers"));
var _getCryptoAssetsPrices = _interopRequireDefault(require("./getCryptoAssetsPrices"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function seedDBCryptoAssets() {
  return _seedDBCryptoAssets.apply(this, arguments);
}
function _seedDBCryptoAssets() {
  _seedDBCryptoAssets = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          return _context3.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              var cryptoassets, cryptoassetsprices, cryptoassetstickers, topThirty, _iterator, _step, _loop;
              return _regeneratorRuntime().wrap(function _callee$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.prev = 0;
                    _context2.next = 3;
                    return (0, _getCryptoAssets["default"])();
                  case 3:
                    _context2.next = 5;
                    return (0, _getCryptoAssetsTickers["default"])();
                  case 5:
                    _context2.next = 7;
                    return (0, _getCryptoAssetsPrices["default"])();
                  case 7:
                    _context2.next = 9;
                    return getAllSubjects(_cryptoAsset["default"]);
                  case 9:
                    cryptoassets = _context2.sent;
                    _context2.next = 12;
                    return getAllSubjects(_cryptoAssetPrice["default"]);
                  case 12:
                    cryptoassetsprices = _context2.sent;
                    _context2.next = 15;
                    return getAllSubjects(_cryptoAssetTicker["default"]);
                  case 15:
                    cryptoassetstickers = _context2.sent;
                    topThirty = ["BTC", "ETH", "XRP", "LTC", "BCH", "ADA", "XLM", "EOS", "BNB", "USDT", "XMR", "DASH", "NEO", "BSV", "TRX", "VET", "TEZ", "DOGE", "COSM", "POLY", "LINK", "UNI", "NEM", "ONT", "BAT", "USDC", "SNX", "MKR", "COMP", "ALGO"];
                    _iterator = _createForOfIteratorHelper(cryptoassets);
                    _context2.prev = 18;
                    _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
                      var cryptoassetObj, _cryptoassetObj$data, name, coin, networkList, cryptoassetsprice, cryptoassetsticker, _cryptoassetsprice$0$, symbol, price, time, dailyChange, ts, _cryptoassetsticker$, open, low, high, close, quantity, amount, tradeCount, startTime, closeTime, displayName, bid, bidQuantity, ask, askQuantity, markPrice, cryptoAssetDB;
                      return _regeneratorRuntime().wrap(function _loop$(_context) {
                        while (1) switch (_context.prev = _context.next) {
                          case 0:
                            cryptoassetObj = _step.value;
                            _cryptoassetObj$data = cryptoassetObj.data, name = _cryptoassetObj$data.name, coin = _cryptoassetObj$data.coin, networkList = _cryptoassetObj$data.networkList;
                            cryptoassetsprice = cryptoassetsprices.filter(function (item) {
                              return getCharactersBeforeUnderscore(item.data.symbol) === coin && topThirty.includes(coin);
                            });
                            cryptoassetsticker = cryptoassetstickers.filter(function (item) {
                              return getCharactersBeforeUnderscore(item.data.symbol) === coin && topThirty.includes(coin);
                            });
                            if (cryptoassetsprice[0] !== undefined && cryptoassetsticker[0] !== undefined) {
                              _cryptoassetsprice$0$ = cryptoassetsprice[0].data, symbol = _cryptoassetsprice$0$.symbol, price = _cryptoassetsprice$0$.price, time = _cryptoassetsprice$0$.time, dailyChange = _cryptoassetsprice$0$.dailyChange, ts = _cryptoassetsprice$0$.ts;
                              _cryptoassetsticker$ = cryptoassetsticker[0].data, open = _cryptoassetsticker$.open, low = _cryptoassetsticker$.low, high = _cryptoassetsticker$.high, close = _cryptoassetsticker$.close, quantity = _cryptoassetsticker$.quantity, amount = _cryptoassetsticker$.amount, tradeCount = _cryptoassetsticker$.tradeCount, startTime = _cryptoassetsticker$.startTime, closeTime = _cryptoassetsticker$.closeTime, displayName = _cryptoassetsticker$.displayName, bid = _cryptoassetsticker$.bid, bidQuantity = _cryptoassetsticker$.bidQuantity, ask = _cryptoassetsticker$.ask, askQuantity = _cryptoassetsticker$.askQuantity, markPrice = _cryptoassetsticker$.markPrice;
                              cryptoAssetDB = {
                                name: name,
                                coin: coin,
                                symbol: symbol,
                                price: price,
                                time: time,
                                dailyChange: dailyChange,
                                ts: ts,
                                open: open,
                                low: low,
                                high: high,
                                close: close,
                                quantity: quantity,
                                amount: amount,
                                tradeCount: tradeCount,
                                startTime: startTime,
                                closeTime: closeTime,
                                displayName: displayName,
                                bid: bid,
                                bidQuantity: bidQuantity,
                                ask: ask,
                                askQuantity: askQuantity,
                                markPrice: markPrice,
                                networkList: networkList
                              };
                              createCryptoAssetItem(cryptoAssetDB);
                            }
                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }, _loop);
                    });
                    _iterator.s();
                  case 21:
                    if ((_step = _iterator.n()).done) {
                      _context2.next = 25;
                      break;
                    }
                    return _context2.delegateYield(_loop(), "t0", 23);
                  case 23:
                    _context2.next = 21;
                    break;
                  case 25:
                    _context2.next = 30;
                    break;
                  case 27:
                    _context2.prev = 27;
                    _context2.t1 = _context2["catch"](18);
                    _iterator.e(_context2.t1);
                  case 30:
                    _context2.prev = 30;
                    _iterator.f();
                    return _context2.finish(30);
                  case 33:
                    _context2.next = 38;
                    break;
                  case 35:
                    _context2.prev = 35;
                    _context2.t2 = _context2["catch"](0);
                    console.log(_context2.t2);
                  case 38:
                  case "end":
                    return _context2.stop();
                }
              }, _callee, null, [[0, 35], [18, 27, 30, 33]]);
            }));
            return function (_x3, _x4) {
              return _ref.apply(this, arguments);
            };
          }()));
        case 1:
        case "end":
          return _context3.stop();
      }
    }, _callee2);
  }));
  return _seedDBCryptoAssets.apply(this, arguments);
}
function getAllSubjects(_x) {
  return _getAllSubjects.apply(this, arguments);
}
function _getAllSubjects() {
  _getAllSubjects = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(Subject) {
    var allsubjects;
    return _regeneratorRuntime().wrap(function _callee3$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return Subject.find();
        case 3:
          allsubjects = _context4.sent;
          return _context4.abrupt("return", allsubjects);
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          throw _context4.t0;
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return _getAllSubjects.apply(this, arguments);
}
function createCryptoAssetItem(_x2) {
  return _createCryptoAssetItem.apply(this, arguments);
}
function _createCryptoAssetItem() {
  _createCryptoAssetItem = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data) {
    var newItem, savedItem;
    return _regeneratorRuntime().wrap(function _callee4$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          // Create a new CryptoAssetsDB document with the provided data
          newItem = new _cryptoAssetsDB["default"](data);
          _context5.next = 4;
          return newItem.save();
        case 4:
          savedItem = _context5.sent;
          return _context5.abrupt("return", savedItem);
        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.error('Error creating CryptoAsset item:', _context5.t0);
          throw _context5.t0;
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return _createCryptoAssetItem.apply(this, arguments);
}
function getCharactersBeforeUnderscore(str) {
  var parts = str.split('_');
  return parts[0];
}
var _default = seedDBCryptoAssets;
exports["default"] = _default;