"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _order = _interopRequireDefault(require("../models/order"));
var _autotrade = _interopRequireDefault(require("../models/autotrade"));
var _executedtrade = _interopRequireDefault(require("../models/executedtrade"));
var _authenticateToken = _interopRequireDefault(require("../../utils/authenticateToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var orders = (0, _express["default"])();
orders.post('/order/market', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var ownerId, _req$body, tradingPair, type, side, total, price, quantity, assettobuy, assettosell, wallettype, wallet, assettobuytype, assettoselltype, fees, order;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context.next = 25;
            break;
          }
          _context.prev = 1;
          ownerId = req.user._id;
          _req$body = req.body, tradingPair = _req$body.tradingPair, type = _req$body.type, side = _req$body.side, total = _req$body.total, price = _req$body.price, quantity = _req$body.quantity, assettobuy = _req$body.assettobuy, assettosell = _req$body.assettosell, wallettype = _req$body.wallettype, wallet = _req$body.wallet, assettobuytype = _req$body.assettobuytype, assettoselltype = _req$body.assettoselltype, fees = _req$body.fees;
          order = new _order["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            type: type,
            side: side,
            total: total,
            price: price,
            quantity: quantity,
            assettobuy: assettobuy,
            assettosell: assettosell,
            wallettype: wallettype,
            wallet: wallet,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            fees: fees
          });
          _context.next = 7;
          return order.save();
        case 7:
          _context.prev = 7;
          _context.next = 10;
          return order.executeorder({
            percentage: 100
          });
        case 10:
          res.status(201).send({
            message: 'ordercreated'
          });
          _context.next = 17;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](7);
          console.log(_context.t0);
          res.status(400).send(_context.t0);
        case 17:
          _context.next = 23;
          break;
        case 19:
          _context.prev = 19;
          _context.t1 = _context["catch"](1);
          console.log(_context.t1);
          res.status(400).send(_context.t1);
        case 23:
          _context.next = 26;
          break;
        case 25:
          res.status(404).send(error);
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 19], [7, 13]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
orders.post('/order/limit', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var ownerId, _req$body2, tradingPair, type, side, total, limitprice, quantity, assettobuy, assettosell, wallettype, wallet, assettobuytype, assettoselltype, fees, order;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context2.next = 14;
            break;
          }
          _context2.prev = 1;
          ownerId = req.user._id;
          _req$body2 = req.body, tradingPair = _req$body2.tradingPair, type = _req$body2.type, side = _req$body2.side, total = _req$body2.total, limitprice = _req$body2.limitprice, quantity = _req$body2.quantity, assettobuy = _req$body2.assettobuy, assettosell = _req$body2.assettosell, wallettype = _req$body2.wallettype, wallet = _req$body2.wallet, assettobuytype = _req$body2.assettobuytype, assettoselltype = _req$body2.assettoselltype, fees = _req$body2.fees;
          order = new _order["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            type: type,
            side: side,
            total: total,
            price: limitprice,
            quantity: quantity,
            assettobuy: assettobuy,
            assettosell: assettosell,
            wallettype: wallettype,
            wallet: wallet,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            fees: fees,
            limitPrice: limitprice
          });
          _context2.next = 7;
          return order.save();
        case 7:
          res.status(201).send({
            message: 'ordercreated'
          });
          _context2.next = 14;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          res.status(400).send(_context2.t0);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 10]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
orders.post('/order/stoplimit', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var ownerId, _req$body3, tradingPair, type, side, total, limitprice, stopprice, quantity, assettobuy, assettosell, wallettype, wallet, assettobuytype, assettoselltype, fees, order;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context3.next = 15;
            break;
          }
          _context3.prev = 1;
          ownerId = req.user._id;
          _req$body3 = req.body, tradingPair = _req$body3.tradingPair, type = _req$body3.type, side = _req$body3.side, total = _req$body3.total, limitprice = _req$body3.limitprice, stopprice = _req$body3.stopprice, quantity = _req$body3.quantity, assettobuy = _req$body3.assettobuy, assettosell = _req$body3.assettosell, wallettype = _req$body3.wallettype, wallet = _req$body3.wallet, assettobuytype = _req$body3.assettobuytype, assettoselltype = _req$body3.assettoselltype, fees = _req$body3.fees;
          order = new _order["default"]({
            userId: ownerId,
            tradingPair: tradingPair,
            type: type,
            side: side,
            total: total,
            price: limitprice,
            quantity: quantity,
            assettobuy: assettobuy,
            assettosell: assettosell,
            wallettype: wallettype,
            wallet: wallet,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            fees: fees,
            limitPrice: limitprice,
            stopPrice: stopprice
          });
          _context3.next = 7;
          return order.save();
        case 7:
          res.status(201).send({
            message: 'ordercreated'
          });
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          console.log(_context3.t0);
        case 13:
          _context3.next = 16;
          break;
        case 15:
          res.status(404).send(error);
        case 16:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
orders.post('/order/automatictrade', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var ownerId, _req$body4, tradingPair, total, price, assettobuy, assettosell, assettobuytype, assettoselltype, wallettype, wallet, fees, quantity, autotrade;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context4.next = 15;
            break;
          }
          _context4.prev = 1;
          ownerId = req.user._id;
          _req$body4 = req.body, tradingPair = _req$body4.tradingPair, total = _req$body4.total, price = _req$body4.price, assettobuy = _req$body4.assettobuy, assettosell = _req$body4.assettosell, assettobuytype = _req$body4.assettobuytype, assettoselltype = _req$body4.assettoselltype, wallettype = _req$body4.wallettype, wallet = _req$body4.wallet, fees = _req$body4.fees, quantity = _req$body4.quantity;
          autotrade = new _autotrade["default"]({
            tradingPair: tradingPair,
            userId: ownerId,
            total: total,
            price: price,
            assettobuy: assettobuy,
            assettosell: assettosell,
            assettobuytype: assettobuytype,
            assettoselltype: assettoselltype,
            wallettype: wallettype,
            wallet: wallet,
            fees: fees,
            quantity: quantity
          });
          _context4.next = 7;
          return autotrade.save();
        case 7:
          res.status(201).send({
            message: 'autotrade created'
          });
          _context4.next = 13;
          break;
        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
        case 13:
          _context4.next = 16;
          break;
        case 15:
          res.status(404).send(error);
        case 16:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 10]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
orders.get('/orders', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userId, userOrders;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context5.next = 8;
            break;
          }
          userId = req.user._id;
          _context5.next = 4;
          return _order["default"].find({
            userId: userId
          });
        case 4:
          userOrders = _context5.sent;
          res.status(201).send({
            orders: userOrders
          });
          _context5.next = 9;
          break;
        case 8:
          res.status(404).send(error);
        case 9:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
orders.get('/trades', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var userId, executedtrades;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context6.next = 8;
            break;
          }
          userId = req.user._id;
          _context6.next = 4;
          return _executedtrade["default"].find({
            userId: userId
          });
        case 4:
          executedtrades = _context6.sent;
          res.status(201).send({
            executedtrades: executedtrades
          });
          _context6.next = 9;
          break;
        case 8:
          res.status(404).send({
            message: 'not allowed'
          });
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
orders.get('/autotrades', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var userId, autotrades;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context7.next = 8;
            break;
          }
          userId = req.user._id;
          _context7.next = 4;
          return _autotrade["default"].find({
            userId: userId
          });
        case 4:
          autotrades = _context7.sent;
          res.status(201).send({
            autotrades: autotrades
          });
          _context7.next = 9;
          break;
        case 8:
          res.status(404).send({
            message: 'not allowed'
          });
        case 9:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
orders.get('/orderplayground', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, userOrder, orderItem;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          id = '650f3a7b1c2829c7bdbf9bdf';
          _context8.next = 3;
          return _order["default"].find({
            _id: id
          });
        case 3:
          userOrder = _context8.sent;
          orderItem = userOrder[0];
          orderItem.executesell(0.01, 0.16).then(function (_ref9) {
            var walletasset = _ref9.walletasset,
              order = _ref9.order,
              executedtrade = _ref9.executedtrade;
            res.status(201).send({
              walletasset: walletasset,
              order: order,
              executedtrade: executedtrade
            });
          })["catch"](function (error) {
            console.log(error);
          });
        case 6:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
orders["delete"]('/allorders', /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return deleteAllOrders();
        case 2:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return function (_x17, _x18) {
    return _ref10.apply(this, arguments);
  };
}());
function deleteAllOrders() {
  return _deleteAllOrders.apply(this, arguments);
}
function _deleteAllOrders() {
  _deleteAllOrders = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return _order["default"].deleteMany({});
        case 3:
          res.status(200).send({
            message: 'All Orders have been deleted.'
          });
          _context10.next = 9;
          break;
        case 6:
          _context10.prev = 6;
          _context10.t0 = _context10["catch"](0);
          console.error('Error deleting Orders:', _context10.t0);
        case 9:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 6]]);
  }));
  return _deleteAllOrders.apply(this, arguments);
}
var _default = orders;
exports["default"] = _default;