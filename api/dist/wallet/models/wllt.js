"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _asset = _interopRequireDefault(require("../../models/asset"));
var _assetblc = _interopRequireDefault(require("./assetblc"));
var _txn = _interopRequireDefault(require("./txn"));
var _deposit = _interopRequireDefault(require("../functions/deposit"));
var _withdraw = _interopRequireDefault(require("../functions/withdraw"));
var _lockamount = _interopRequireDefault(require("../functions/lockamount"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var wlltSchema = new Schema({
  ownerId: {
    type: Schema.Types.ObjectId,
    required: true,
    index: true // Adding an index for faster queries on ownerId
  },

  walletType: {
    type: String,
    required: true,
    "enum": ["fiat/spot", "margin", "defi", "tokenized stocks", "bot trading", "bonus"]
  },
  balance: {
    type: Number,
    "default": 0
  },
  assetBlcs: [],
  bitcoinXpub: {
    type: String,
    required: true
  },
  bitcoinPrivateKey: {
    type: String,
    required: true
  },
  bitcoinAddress: {
    type: String,
    required: true
  },
  bitcoinMnemonic: {
    type: String,
    required: true
  },
  bitcoinTxs: {
    type: Number,
    "default": 0
  },
  confirmedBitcoinTransactions: {
    type: Array,
    "default": []
  },
  txns: []
});
wlltSchema.methods.deposit = _deposit["default"];
wlltSchema.methods.withdraw = _withdraw["default"];
wlltSchema.methods.lock = _lockamount["default"];
wlltSchema.methods.swap = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(toquant, fromquant, assetto, assetfrom) {
    var _this = this;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          console.log(toquant, fromquant, assetto, assetfrom);
          return _context2.abrupt("return", new Promise( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.prev = 0;
                    _context.next = 3;
                    return _this.deposit(toquant, assetto);
                  case 3:
                    _context.next = 5;
                    return _this.withdraw(fromquant, assetfrom);
                  case 5:
                    resolve('swap completed');
                    _context.next = 11;
                    break;
                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](0);
                    reject(_context.t0);
                  case 11:
                  case "end":
                    return _context.stop();
                }
              }, _callee, null, [[0, 8]]);
            }));
            return function (_x5, _x6) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
}();
wlltSchema.statics.returnBlcs = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(_id) {
    var wallet, assetBlcs, balancesPromises, balances;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return this.findOne({
            _id: _id
          });
        case 2:
          wallet = _context4.sent;
          assetBlcs = wallet.assetBlcs;
          if (!assetBlcs.length) {
            _context4.next = 12;
            break;
          }
          balancesPromises = assetBlcs.map( /*#__PURE__*/function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(assetBlc) {
              var assetid, walletid, blc, asset;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    assetid = assetBlc;
                    walletid = wallet._id;
                    _context3.next = 4;
                    return _assetblc["default"].findOne({
                      assetid: assetid,
                      wallet: walletid
                    });
                  case 4:
                    blc = _context3.sent;
                    _context3.next = 7;
                    return _asset["default"].findOne({
                      _id: assetid
                    });
                  case 7:
                    asset = _context3.sent;
                    return _context3.abrupt("return", {
                      assetid: blc.assetid,
                      assetname: asset.name,
                      symbol: asset.coin,
                      blc: blc,
                      asset: asset
                    });
                  case 9:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x8) {
              return _ref4.apply(this, arguments);
            };
          }());
          _context4.next = 8;
          return Promise.all(balancesPromises);
        case 8:
          balances = _context4.sent;
          return _context4.abrupt("return", balances);
        case 12:
          return _context4.abrupt("return", []);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, this);
  }));
  return function (_x7) {
    return _ref3.apply(this, arguments);
  };
}();
wlltSchema.statics.returnTotalBlc = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(_id) {
    var sumArray, wallet, assetBlcs, balancesPromises, balances;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          sumArray = function _sumArray(numbers) {
            return numbers.reduce(function (total, num) {
              return total + num;
            }, 0);
          };
          _context6.next = 3;
          return this.findOne({
            _id: _id
          });
        case 3:
          wallet = _context6.sent;
          assetBlcs = wallet.assetBlcs;
          if (!assetBlcs.length) {
            _context6.next = 13;
            break;
          }
          balancesPromises = assetBlcs.map( /*#__PURE__*/function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(assetBlc) {
              var assetblc, blc;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return _assetblc["default"].findOne({
                      id: assetBlc,
                      wallet: wallet._id
                    });
                  case 2:
                    assetblc = _context5.sent;
                    _context5.next = 5;
                    return assetblc.balance;
                  case 5:
                    blc = _context5.sent;
                    return _context5.abrupt("return", blc);
                  case 7:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x10) {
              return _ref6.apply(this, arguments);
            };
          }());
          _context6.next = 9;
          return Promise.all(balancesPromises);
        case 9:
          balances = _context6.sent;
          return _context6.abrupt("return", sumArray(balances));
        case 13:
          return _context6.abrupt("return", 0);
        case 14:
        case "end":
          return _context6.stop();
      }
    }, _callee6, this);
  }));
  return function (_x9) {
    return _ref5.apply(this, arguments);
  };
}();
wlltSchema.statics.returnAssetBlcs = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(_id) {
    var wallet, assetBlcs, balancesPromises, balances;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return this.findOne({
            _id: _id
          });
        case 2:
          wallet = _context8.sent;
          assetBlcs = wallet.assetBlcs;
          if (!assetBlcs.length) {
            _context8.next = 12;
            break;
          }
          balancesPromises = assetBlcs.map( /*#__PURE__*/function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(assetBlc) {
              var assetblc;
              return _regeneratorRuntime().wrap(function _callee7$(_context7) {
                while (1) switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return _assetblc["default"].findOne({
                      id: assetBlc,
                      wallet: wallet._id
                    });
                  case 2:
                    assetblc = _context7.sent;
                    return _context7.abrupt("return", assetblc);
                  case 4:
                  case "end":
                    return _context7.stop();
                }
              }, _callee7);
            }));
            return function (_x12) {
              return _ref8.apply(this, arguments);
            };
          }());
          _context8.next = 8;
          return Promise.all(balancesPromises);
        case 8:
          balances = _context8.sent;
          return _context8.abrupt("return", balances);
        case 12:
          return _context8.abrupt("return", []);
        case 13:
        case "end":
          return _context8.stop();
      }
    }, _callee8, this);
  }));
  return function (_x11) {
    return _ref7.apply(this, arguments);
  };
}();
wlltSchema.statics.updateBTCTransactions = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(bitcoinAddress, btctxid, value) {
    var wallet, assets, btcasset;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.next = 2;
          return this.findOne({
            bitcoinAddress: bitcoinAddress
          });
        case 2:
          wallet = _context10.sent;
          _context10.next = 5;
          return _asset["default"].find();
        case 5:
          assets = _context10.sent;
          btcasset = assets.find(function (asset) {
            return asset.name === 'Bitcoin' && asset.coin === 'BTC';
          });
          wallet.deposit(value, btcasset._id).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
            var confirmedBTCTxns, newtxn, txns;
            return _regeneratorRuntime().wrap(function _callee9$(_context9) {
              while (1) switch (_context9.prev = _context9.next) {
                case 0:
                  confirmedBTCTxns = wallet.confirmedBitcoinTransactions;
                  confirmedBTCTxns.push(btctxid);
                  wallet.confirmedBitcoinTransactions = confirmedBTCTxns;
                  newtxn = new _txn["default"]({
                    assetid: btcasset._id,
                    type: 'deposit',
                    notiftxt: "deposit of ".concat(value, " ").concat(btcasset.coin, " was made")
                  });
                  _context9.next = 6;
                  return newtxn.save();
                case 6:
                  txns = wallet.txns;
                  txns.push(newtxn._id);
                  wallet.txns = txns;
                  _context9.next = 11;
                  return wallet.save();
                case 11:
                case "end":
                  return _context9.stop();
              }
            }, _callee9);
          })))["catch"](function (err) {
            console.log(err);
          });
        case 8:
        case "end":
          return _context10.stop();
      }
    }, _callee10, this);
  }));
  return function (_x13, _x14, _x15) {
    return _ref9.apply(this, arguments);
  };
}();
wlltSchema.statics.withdrawal = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(quantity, assetid, _id) {
    var wallet;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.next = 2;
          return this.findOne({
            _id: _id
          });
        case 2:
          wallet = _context12.sent;
          wallet.withdraw(quantity, assetid).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
            var asset, newtxn, txns;
            return _regeneratorRuntime().wrap(function _callee11$(_context11) {
              while (1) switch (_context11.prev = _context11.next) {
                case 0:
                  _context11.next = 2;
                  return _asset["default"].findOne({
                    _id: assetid
                  });
                case 2:
                  asset = _context11.sent;
                  newtxn = new _txn["default"]({
                    assetid: assetid,
                    type: 'withdrawal',
                    notiftxt: "withdrawal of ".concat(quantity, " ").concat(asset.coin, " was made")
                  });
                  _context11.next = 6;
                  return newtxn.save();
                case 6:
                  txns = wallet.txns;
                  txns.push(newtxn._id);
                  wallet.txns = txns;
                  _context11.next = 11;
                  return wallet.save();
                case 11:
                case "end":
                  return _context11.stop();
              }
            }, _callee11);
          })))["catch"](function (err) {
            console.log(err);
            return err;
          });
        case 4:
        case "end":
          return _context12.stop();
      }
    }, _callee12, this);
  }));
  return function (_x16, _x17, _x18) {
    return _ref11.apply(this, arguments);
  };
}();
wlltSchema.statics.getTransactions = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(_id) {
    var wallet, txns, transactionsPromises, transactions;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.next = 2;
          return this.findOne({
            _id: _id
          });
        case 2:
          wallet = _context14.sent;
          if (!wallet.txns.length) {
            _context14.next = 12;
            break;
          }
          txns = wallet.txns;
          transactionsPromises = txns.map( /*#__PURE__*/function () {
            var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(txn) {
              var transaction;
              return _regeneratorRuntime().wrap(function _callee13$(_context13) {
                while (1) switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return _txn["default"].findOne({
                      _id: txn
                    });
                  case 2:
                    transaction = _context13.sent;
                    return _context13.abrupt("return", transaction);
                  case 4:
                  case "end":
                    return _context13.stop();
                }
              }, _callee13);
            }));
            return function (_x20) {
              return _ref14.apply(this, arguments);
            };
          }());
          _context14.next = 8;
          return Promise.all(transactionsPromises);
        case 8:
          transactions = _context14.sent;
          return _context14.abrupt("return", transactions);
        case 12:
          return _context14.abrupt("return", []);
        case 13:
        case "end":
          return _context14.stop();
      }
    }, _callee14, this);
  }));
  return function (_x19) {
    return _ref13.apply(this, arguments);
  };
}();
var Wllt = mongoose.model('Wllt', wlltSchema);
module.exports = Wllt;