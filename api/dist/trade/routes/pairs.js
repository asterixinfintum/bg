"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _pair = _interopRequireDefault(require("../../models/pair"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var pairs = _express["default"].Router();
function specifichours(dataArray, hrs) {
  // Check if the array is empty
  if (dataArray.length === 0) return [];

  // Convert the first datetime to a Unix timestamp
  var startTime = Date.parse(dataArray[0].datetime) / 1000;
  var endTime = startTime + hrs * 3600; // 24 hours later in seconds

  // Filter and transform the data
  return dataArray.map(function (data) {
    return {
      time: Date.parse(data.datetime) / 1000,
      value: data.price
    };
  }).filter(function (item) {
    return item.time >= startTime && item.time < endTime;
  });
}
function getFirst15MinutesData(dataArray) {
  if (dataArray.length === 0) return [];

  // Convert the first datetime to a Unix timestamp
  var startTime = Date.parse(dataArray[0].datetime) / 1000;
  var endTime = startTime + 15 * 60; // 15 minutes later in seconds

  // Filter and transform the data
  return dataArray.map(function (data) {
    return {
      time: Date.parse(data.datetime) / 1000,
      value: data.price
    };
  }).filter(function (item) {
    return item.time >= startTime && item.time < endTime;
  });
}
function filterHourlyItems(dataArray) {
  if (dataArray.length === 0) return [];
  var result = [];
  var lastTimestamp = dataArray[0].time;

  // Always include the first item
  result.push(dataArray[0]);
  dataArray.forEach(function (item) {
    if (item.time >= lastTimestamp + 3600) {
      result.push(item);
      lastTimestamp = item.time;
    }
  });
  return result;
}
pairs.get('/pairs', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$query, baseAssetId, quoteAssetId, query, _pairs;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$query = req.query, baseAssetId = _req$query.baseAssetId, quoteAssetId = _req$query.quoteAssetId;
          query = {};
          if (!baseAssetId) {
            _context.next = 6;
            break;
          }
          if (mongoose.Types.ObjectId.isValid(baseAssetId)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            error: 'Invalid baseAssetId'
          }));
        case 5:
          query.baseAssetId = baseAssetId;
        case 6:
          if (!quoteAssetId) {
            _context.next = 10;
            break;
          }
          if (mongoose.Types.ObjectId.isValid(quoteAssetId)) {
            _context.next = 9;
            break;
          }
          return _context.abrupt("return", res.status(400).send({
            error: 'Invalid quoteAssetId'
          }));
        case 9:
          query.quoteAssetId = quoteAssetId;
        case 10:
          _context.prev = 10;
          _context.next = 13;
          return _pair["default"].find(query);
        case 13:
          _pairs = _context.sent;
          res.status(200).send({
            pairs: _pairs
          });
          _context.next = 21;
          break;
        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](10);
          console.error('Error fetching pairs:', _context.t0);
          res.status(500).send({
            error: 'An error occurred while fetching pairs.'
          });
        case 21:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[10, 17]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
pairs.get('/pairs/by-base', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$query2, baseAsset, assetType, _pairs2, quoteAssetType, pairsPromises, pairslist;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$query2 = req.query, baseAsset = _req$query2.baseAsset, assetType = _req$query2.assetType; // Check if baseCurrency is provided
          if (baseAsset) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context3.prev = 3;
          if (assetType) {
            _context3.next = 8;
            break;
          }
          _context3.next = 7;
          return _pair["default"].find({
            baseAsset: baseAsset
          });
        case 7:
          _pairs2 = _context3.sent;
        case 8:
          if (!assetType) {
            _context3.next = 13;
            break;
          }
          quoteAssetType = assetType;
          _context3.next = 12;
          return _pair["default"].find({
            baseAsset: baseAsset,
            quoteAssetType: quoteAssetType
          });
        case 12:
          _pairs2 = _context3.sent;
        case 13:
          if (!(_pairs2.length === 0)) {
            _context3.next = 15;
            break;
          }
          return _context3.abrupt("return", res.status(404).send({
            message: 'No pairs found for the specified base currency'
          }));
        case 15:
          pairsPromises = _pairs2.map( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(pair) {
              var pairprice, pricedifference;
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return pair.calculatePrice();
                  case 2:
                    pairprice = _context2.sent;
                    _context2.next = 5;
                    return pair.calculatepricedifference();
                  case 5:
                    pricedifference = _context2.sent;
                    return _context2.abrupt("return", {
                      _id: pair._id,
                      pair: pair.pair,
                      price: pairprice,
                      pricedifference: pricedifference,
                      baseAssetType: pair.baseAssetType,
                      quoteAssetType: pair.quoteAssetType
                    });
                  case 7:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x5) {
              return _ref3.apply(this, arguments);
            };
          }());
          _context3.next = 18;
          return Promise.all(pairsPromises);
        case 18:
          pairslist = _context3.sent;
          res.status(200).send({
            pairs: pairslist
          });
          _context3.next = 26;
          break;
        case 22:
          _context3.prev = 22;
          _context3.t0 = _context3["catch"](3);
          console.error('Error fetching pairs by base currency:', _context3.t0);
          res.status(500).send({
            error: 'An error occurred while fetching pairs.'
          });
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[3, 22]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
pairs.get('/pairs/by-quote', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$query3, quoteAsset, assetType, _pairs3;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _req$query3 = req.query, quoteAsset = _req$query3.quoteAsset, assetType = _req$query3.assetType; // Check if baseCurrency is provided
          if (quoteAsset) {
            _context4.next = 3;
            break;
          }
          return _context4.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context4.prev = 3;
          if (assetType) {
            _context4.next = 8;
            break;
          }
          _context4.next = 7;
          return _pair["default"].find({
            quoteAsset: quoteAsset
          });
        case 7:
          _pairs3 = _context4.sent;
        case 8:
          if (!(_pairs3.length === 0)) {
            _context4.next = 10;
            break;
          }
          return _context4.abrupt("return", res.status(404).send({
            message: 'No pairs found for the specified base currency'
          }));
        case 10:
          res.status(200).send({
            pairs: _pairs3
          });
          _context4.next = 17;
          break;
        case 13:
          _context4.prev = 13;
          _context4.t0 = _context4["catch"](3);
          console.error('Error fetching pairs by base currency:', _context4.t0);
          res.status(500).send({
            error: 'An error occurred while fetching pairs.'
          });
        case 17:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[3, 13]]);
  }));
  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}());
pairs.get('/pair/orders', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var pairid, pairitem, orders;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          pairid = req.query.pairid;
          if (pairid) {
            _context5.next = 3;
            break;
          }
          return _context5.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context5.prev = 3;
          _context5.next = 6;
          return _pair["default"].findOne({
            _id: pairid
          });
        case 6:
          pairitem = _context5.sent;
          orders = pairitem.orders;
          res.status(200).send({
            orders: orders
          });
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](3);
          res.status(500).send({
            error: 'An error occurred while fetching pair orders.'
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[3, 11]]);
  }));
  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}());
pairs.get('/pair/pricehistory/hours', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var pairid, pairitem, getpricehistory, first24hours, hours;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          pairid = req.query.pairid;
          if (pairid) {
            _context6.next = 3;
            break;
          }
          return _context6.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context6.prev = 3;
          _context6.next = 6;
          return _pair["default"].findOne({
            _id: pairid
          });
        case 6:
          pairitem = _context6.sent;
          _context6.next = 9;
          return pairitem.getpricehistory();
        case 9:
          getpricehistory = _context6.sent;
          first24hours = specifichours(getpricehistory, 24);
          hours = filterHourlyItems(first24hours);
          res.status(200).send({
            hours: hours
          });
          _context6.next = 18;
          break;
        case 15:
          _context6.prev = 15;
          _context6.t0 = _context6["catch"](3);
          res.status(500).send({
            error: 'An error occurred while fetching price history.'
          });
        case 18:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[3, 15]]);
  }));
  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}());
pairs.get('/pair/pricehistory/fourhours', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var pairid, pairitem, getpricehistory, first4hours, hours;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          pairid = req.query.pairid;
          if (pairid) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context7.prev = 3;
          _context7.next = 6;
          return _pair["default"].findOne({
            _id: pairid
          });
        case 6:
          pairitem = _context7.sent;
          _context7.next = 9;
          return pairitem.getpricehistory();
        case 9:
          getpricehistory = _context7.sent;
          first4hours = specifichours(getpricehistory, 4);
          hours = filterHourlyItems(first4hours);
          res.status(200).send({
            hours: hours
          });
          _context7.next = 18;
          break;
        case 15:
          _context7.prev = 15;
          _context7.t0 = _context7["catch"](3);
          res.status(500).send({
            error: 'An error occurred while fetching pair price history.'
          });
        case 18:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[3, 15]]);
  }));
  return function (_x12, _x13) {
    return _ref7.apply(this, arguments);
  };
}());
pairs.get('/pair/pricehistory/onehour', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var pairid, pairitem, getpricehistory, mins;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          pairid = req.query.pairid;
          if (pairid) {
            _context8.next = 3;
            break;
          }
          return _context8.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context8.prev = 3;
          _context8.next = 6;
          return _pair["default"].findOne({
            _id: pairid
          });
        case 6:
          pairitem = _context8.sent;
          _context8.next = 9;
          return pairitem.getpricehistory();
        case 9:
          getpricehistory = _context8.sent;
          mins = specifichours(getpricehistory, 1);
          res.status(200).send({
            mins: mins
          });
          _context8.next = 17;
          break;
        case 14:
          _context8.prev = 14;
          _context8.t0 = _context8["catch"](3);
          res.status(500).send({
            error: 'An error occurred while fetching pair price history.'
          });
        case 17:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[3, 14]]);
  }));
  return function (_x14, _x15) {
    return _ref8.apply(this, arguments);
  };
}());
pairs.get('/pair/pricehistory/fifteenmin', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var pairid, pairitem, getpricehistory, mins;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          pairid = req.query.pairid;
          if (pairid) {
            _context9.next = 3;
            break;
          }
          return _context9.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context9.prev = 3;
          _context9.next = 6;
          return _pair["default"].findOne({
            _id: pairid
          });
        case 6:
          pairitem = _context9.sent;
          _context9.next = 9;
          return pairitem.getpricehistory();
        case 9:
          getpricehistory = _context9.sent;
          mins = getFirst15MinutesData(getpricehistory);
          res.status(200).send({
            mins: mins
          });
          _context9.next = 17;
          break;
        case 14:
          _context9.prev = 14;
          _context9.t0 = _context9["catch"](3);
          res.status(500).send({
            error: 'An error occurred while fetching pair price history.'
          });
        case 17:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[3, 14]]);
  }));
  return function (_x16, _x17) {
    return _ref9.apply(this, arguments);
  };
}());
pairs.get('/pair/pricehistory/hours/candlestick', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var _req$query4, pairid, candlestickdatalength, pairitem, getpricehistory, candlestickdata;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _req$query4 = req.query, pairid = _req$query4.pairid, candlestickdatalength = _req$query4.candlestickdatalength;
          if (pairid) {
            _context10.next = 3;
            break;
          }
          return _context10.abrupt("return", res.status(400).send({
            error: 'Base currency is required'
          }));
        case 3:
          _context10.prev = 3;
          _context10.next = 6;
          return _pair["default"].findOne({
            _id: pairid
          });
        case 6:
          pairitem = _context10.sent;
          _context10.next = 9;
          return pairitem.getpricehistorycandlestick();
        case 9:
          getpricehistory = _context10.sent;
          candlestickdata = getpricehistory.splice(-candlestickdatalength);
          res.status(200).send({
            candlestickdata: candlestickdata
          });
          _context10.next = 17;
          break;
        case 14:
          _context10.prev = 14;
          _context10.t0 = _context10["catch"](3);
          res.status(500).send({
            error: 'An error occurred while fetching pair price history.'
          });
        case 17:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[3, 14]]);
  }));
  return function (_x18, _x19) {
    return _ref10.apply(this, arguments);
  };
}());
var _default = pairs;
exports["default"] = _default;