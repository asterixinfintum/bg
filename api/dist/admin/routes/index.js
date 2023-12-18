"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _user = _interopRequireDefault(require("../../models/user"));
var _admin = _interopRequireDefault(require("../../models/admin"));
var _tokentracker = _interopRequireDefault(require("../../models/tokentracker"));
var _wllt = _interopRequireDefault(require("../../wallet/models/wllt"));
var _asset = _interopRequireDefault(require("../../models/asset"));
var _assetblc = _interopRequireDefault(require("../../wallet/models/assetblc"));
var _generatetradingpairs = _interopRequireDefault(require("../../functions/generatetradingpairs"));
var _addpairquotes = _interopRequireDefault(require("../../functions/addpairquotes"));
var _updatecommodities = _interopRequireDefault(require("../../trade/updatecommodities"));
var _authenticateToken = _interopRequireDefault(require("../../utils/authenticateToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var admin = _express["default"].Router();
admin.post('/admin/create', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var receivedCredentials, newagent;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          receivedCredentials = req.body;
          newagent = new _admin["default"](receivedCredentials);
          _context.next = 5;
          return newagent.save();
        case 5:
          res.json({
            message: 'Agent saved successfully.',
            newagent: newagent
          });
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            error: 'An error occurred during registration.'
          });
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
admin.post('/admin/login', /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var _req$body, username, password, agent, payload, token, newtokentracker;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, username = _req$body.username, password = _req$body.password;
          _context2.next = 4;
          return _admin["default"].findOne({
            username: username,
            password: password
          });
        case 4:
          agent = _context2.sent;
          if (agent) {
            _context2.next = 7;
            break;
          }
          return _context2.abrupt("return", res.sendStatus(401));
        case 7:
          payload = {
            _id: agent._id,
            username: agent.username
          };
          token = _jsonwebtoken["default"].sign(payload, process.env.secretKeyJWT);
          newtokentracker = new _tokentracker["default"]({
            token: token,
            type: 'agent',
            unid: agent._id
          });
          _context2.next = 12;
          return newtokentracker.save();
        case 12:
          agent.token = token;
          _context2.next = 15;
          return agent.save();
        case 15:
          res.status(200).json({
            message: 'Login successful.',
            token: token,
            agentdata: {
              username: agent.username,
              _id: agent._id
            }
          });
          _context2.next = 21;
          break;
        case 18:
          _context2.prev = 18;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            error: 'An error occurred during login.'
          });
        case 21:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 18]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
admin.get('/admin/all', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var master, agents;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          master = req.query.master;
          if (!(master !== process.env.masterKey)) {
            _context3.next = 4;
            break;
          }
          return _context3.abrupt("return", res.sendStatus(401));
        case 4:
          _context3.next = 6;
          return _admin["default"].find();
        case 6:
          agents = _context3.sent;
          res.status(200).json({
            agents: agents
          });
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            error: 'An error occurred during agents fetch.'
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
admin.put('/admin/edit', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$query, master, agentid, password, agent, tokentracker, _iterator, _step, tracker, updatedagent;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$query = req.query, master = _req$query.master, agentid = _req$query.agentid;
          password = req.body.password;
          if (!(master !== process.env.masterKey)) {
            _context4.next = 5;
            break;
          }
          return _context4.abrupt("return", res.sendStatus(401));
        case 5:
          if (!password) {
            _context4.next = 42;
            break;
          }
          _context4.next = 8;
          return _admin["default"].findOne({
            _id: agentid
          });
        case 8:
          agent = _context4.sent;
          if (!agent) {
            _context4.next = 41;
            break;
          }
          _context4.next = 12;
          return _tokentracker["default"].find({
            token: agent.token,
            unid: agent._id
          });
        case 12:
          tokentracker = _context4.sent;
          if (!tokentracker.length) {
            _context4.next = 31;
            break;
          }
          _iterator = _createForOfIteratorHelper(tokentracker);
          _context4.prev = 15;
          _iterator.s();
        case 17:
          if ((_step = _iterator.n()).done) {
            _context4.next = 23;
            break;
          }
          tracker = _step.value;
          _context4.next = 21;
          return _tokentracker["default"].deleteToken(tracker.token);
        case 21:
          _context4.next = 17;
          break;
        case 23:
          _context4.next = 28;
          break;
        case 25:
          _context4.prev = 25;
          _context4.t0 = _context4["catch"](15);
          _iterator.e(_context4.t0);
        case 28:
          _context4.prev = 28;
          _iterator.f();
          return _context4.finish(28);
        case 31:
          agent.password = password;
          agent.token = '';
          _context4.next = 35;
          return agent.save();
        case 35:
          _context4.next = 37;
          return _admin["default"].findOne({
            _id: agentid
          });
        case 37:
          updatedagent = _context4.sent;
          res.json({
            message: 'Agent updated successfully.',
            updatedagent: updatedagent
          });
          _context4.next = 42;
          break;
        case 41:
          res.status(404).json({
            message: 'Agent not found.'
          });
        case 42:
          _context4.next = 47;
          break;
        case 44:
          _context4.prev = 44;
          _context4.t1 = _context4["catch"](0);
          res.status(500).json({
            error: 'An error occurred during update.'
          });
        case 47:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 44], [15, 25, 28, 31]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
admin["delete"]('/admin/deleteall', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var master;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          master = req.query.master;
          if (!(master !== process.env.masterKey)) {
            _context5.next = 4;
            break;
          }
          return _context5.abrupt("return", res.sendStatus(401));
        case 4:
          _context5.next = 6;
          return _admin["default"].deleteMany({});
        case 6:
          _context5.next = 8;
          return _tokentracker["default"].deleteTokensByType('agent');
        case 8:
          res.json({
            message: 'Agent deleted successfully.'
          });
          _context5.next = 14;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            error: 'An error occurred during delete.'
          });
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
admin.get('/allusers', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _user["default"].find();
        case 3:
          users = _context6.sent;
          res.status(200).send({
            users: users
          });
          _context6.next = 11;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          console.error(_context6.t0);
          res.status(500).send('An error occurred');
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
admin.get('/user', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, user;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.query.id;
          _context7.next = 4;
          return _user["default"].findOne({
            _id: id
          });
        case 4:
          user = _context7.sent;
          res.status(200).send({
            user: user
          });
          _context7.next = 12;
          break;
        case 8:
          _context7.prev = 8;
          _context7.t0 = _context7["catch"](0);
          console.error(_context7.t0);
          res.status(500).send('An error occurred');
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 8]]);
  }));
  return function (_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}());
admin.get('/userwallets', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var id, userwallets;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          id = req.query.id;
          _context8.next = 4;
          return _wllt["default"].find({
            ownerId: id
          });
        case 4:
          userwallets = _context8.sent;
          res.status(200).send({
            userwallets: userwallets
          });
          _context8.next = 12;
          break;
        case 8:
          _context8.prev = 8;
          _context8.t0 = _context8["catch"](0);
          console.error(_context8.t0);
          res.status(500).send('An error occurred');
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 8]]);
  }));
  return function (_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}());
admin.get('/user/assets', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var _req$query2, id, wallet, crypto, commodities, stocks, fiat, userwallet, processAssets, cryptoblc, commoditiesblc, stocksblc, fiatblc;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _req$query2 = req.query, id = _req$query2.id, wallet = _req$query2.wallet;
          _context11.prev = 1;
          _context11.next = 4;
          return _asset["default"].find({
            assetType: 'crypto'
          });
        case 4:
          crypto = _context11.sent;
          _context11.next = 7;
          return _asset["default"].find({
            assetType: 'commodity'
          });
        case 7:
          commodities = _context11.sent;
          _context11.next = 10;
          return _asset["default"].find({
            assetType: 'stock'
          });
        case 10:
          stocks = _context11.sent;
          _context11.next = 13;
          return _asset["default"].find({
            assetType: 'fiat'
          });
        case 13:
          fiat = _context11.sent;
          _context11.next = 16;
          return _wllt["default"].findOne({
            _id: wallet
          });
        case 16:
          userwallet = _context11.sent;
          processAssets = /*#__PURE__*/function () {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(assets) {
              var assetPromises;
              return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                while (1) switch (_context10.prev = _context10.next) {
                  case 0:
                    assetPromises = assets.map( /*#__PURE__*/function () {
                      var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(asset) {
                        var assetid, asstBlc;
                        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
                          while (1) switch (_context9.prev = _context9.next) {
                            case 0:
                              assetid = asset._id.toString();
                              _context9.next = 3;
                              return _assetblc["default"].findOne({
                                assetid: assetid,
                                wallet: userwallet._id
                              });
                            case 3:
                              asstBlc = _context9.sent;
                              return _context9.abrupt("return", _objectSpread(_objectSpread({}, asset._doc), {}, {
                                asstBlc: asstBlc ? asstBlc.balance : 0
                              }));
                            case 5:
                            case "end":
                              return _context9.stop();
                          }
                        }, _callee9);
                      }));
                      return function (_x20) {
                        return _ref11.apply(this, arguments);
                      };
                    }());
                    _context10.next = 3;
                    return Promise.all(assetPromises);
                  case 3:
                    return _context10.abrupt("return", _context10.sent);
                  case 4:
                  case "end":
                    return _context10.stop();
                }
              }, _callee10);
            }));
            return function processAssets(_x19) {
              return _ref10.apply(this, arguments);
            };
          }();
          _context11.next = 20;
          return processAssets(crypto);
        case 20:
          cryptoblc = _context11.sent;
          _context11.next = 23;
          return processAssets(commodities);
        case 23:
          commoditiesblc = _context11.sent;
          _context11.next = 26;
          return processAssets(stocks);
        case 26:
          stocksblc = _context11.sent;
          _context11.next = 29;
          return processAssets(fiat);
        case 29:
          fiatblc = _context11.sent;
          // Send response back to client
          res.status(200).json({
            crypto: cryptoblc,
            commodities: commoditiesblc,
            stocks: stocksblc,
            fiat: fiatblc,
            userwallet: userwallet
          });
          _context11.next = 37;
          break;
        case 33:
          _context11.prev = 33;
          _context11.t0 = _context11["catch"](1);
          console.error(_context11.t0);
          res.status(500).send('Error processing request');
        case 37:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[1, 33]]);
  }));
  return function (_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}());
admin.post('/user/asset/add', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var balanceupdate, _req$query3, wallet, assetid, userwallet;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          _context12.prev = 0;
          balanceupdate = req.body.balanceupdate;
          _req$query3 = req.query, wallet = _req$query3.wallet, assetid = _req$query3.assetid;
          _context12.next = 5;
          return _wllt["default"].findOne({
            _id: wallet
          });
        case 5:
          userwallet = _context12.sent;
          _context12.next = 8;
          return userwallet.deposit(balanceupdate, assetid);
        case 8:
          res.status(200).json({
            message: 'done'
          });
          _context12.next = 15;
          break;
        case 11:
          _context12.prev = 11;
          _context12.t0 = _context12["catch"](0);
          console.error(_context12.t0);
          res.status(500).send('Error processing request');
        case 15:
        case "end":
          return _context12.stop();
      }
    }, _callee12, null, [[0, 11]]);
  }));
  return function (_x21, _x22) {
    return _ref12.apply(this, arguments);
  };
}());
admin.post('/user/asset/subtract', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var balanceupdate, _req$query4, wallet, assetid, userwallet;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          _context13.prev = 0;
          balanceupdate = req.body.balanceupdate;
          _req$query4 = req.query, wallet = _req$query4.wallet, assetid = _req$query4.assetid;
          _context13.next = 5;
          return _wllt["default"].findOne({
            _id: wallet
          });
        case 5:
          userwallet = _context13.sent;
          _context13.next = 8;
          return userwallet.withdraw(balanceupdate, assetid);
        case 8:
          res.status(200).json({
            message: 'done'
          });
          _context13.next = 15;
          break;
        case 11:
          _context13.prev = 11;
          _context13.t0 = _context13["catch"](0);
          console.error(_context13.t0);
          res.status(500).send('Error processing request');
        case 15:
        case "end":
          return _context13.stop();
      }
    }, _callee13, null, [[0, 11]]);
  }));
  return function (_x23, _x24) {
    return _ref13.apply(this, arguments);
  };
}());
admin.post('/user/accounttypeupdate/update', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14(req, res) {
    var id, accounttypeupdate, user;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          id = req.query.id;
          accounttypeupdate = req.body.accounttypeupdate;
          _context14.next = 5;
          return _user["default"].findOne({
            _id: id
          });
        case 5:
          user = _context14.sent;
          user.accountplan = accounttypeupdate;
          _context14.next = 9;
          return user.save();
        case 9:
          res.status(200).json({
            message: 'done'
          });
          _context14.next = 15;
          break;
        case 12:
          _context14.prev = 12;
          _context14.t0 = _context14["catch"](0);
          res.status(500).send('Error processing request');
        case 15:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 12]]);
  }));
  return function (_x25, _x26) {
    return _ref14.apply(this, arguments);
  };
}());
admin.post('/user/spotbtcaddress/update', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    var id, spotbtcaddress, user;
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          _context15.prev = 0;
          id = req.query.id;
          spotbtcaddress = req.body.spotbtcaddress;
          _context15.next = 5;
          return _user["default"].findOne({
            _id: id
          });
        case 5:
          user = _context15.sent;
          user.spotbtcaddress = spotbtcaddress;
          _context15.next = 9;
          return user.save();
        case 9:
          res.status(200).json({
            message: 'done'
          });
          _context15.next = 15;
          break;
        case 12:
          _context15.prev = 12;
          _context15.t0 = _context15["catch"](0);
          res.status(500).send('Error processing request');
        case 15:
        case "end":
          return _context15.stop();
      }
    }, _callee15, null, [[0, 12]]);
  }));
  return function (_x27, _x28) {
    return _ref15.apply(this, arguments);
  };
}());
admin.post('/user/marginbtcaddress/update', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var id, marginbtcaddress, user;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          _context16.prev = 0;
          id = req.query.id;
          marginbtcaddress = req.body.marginbtcaddress;
          _context16.next = 5;
          return _user["default"].findOne({
            _id: id
          });
        case 5:
          user = _context16.sent;
          user.marginbtcaddress = marginbtcaddress;
          _context16.next = 9;
          return user.save();
        case 9:
          res.status(200).json({
            message: 'done'
          });
          _context16.next = 15;
          break;
        case 12:
          _context16.prev = 12;
          _context16.t0 = _context16["catch"](0);
          res.status(500).send('Error processing request');
        case 15:
        case "end":
          return _context16.stop();
      }
    }, _callee16, null, [[0, 12]]);
  }));
  return function (_x29, _x30) {
    return _ref16.apply(this, arguments);
  };
}());
admin.get('/jhgchdh/generatetradingpair', /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          _context17.prev = 0;
          _context17.next = 3;
          return (0, _generatetradingpairs["default"])();
        case 3:
          res.status(200).json({
            message: 'trading pairs generated'
          });
          _context17.next = 9;
          break;
        case 6:
          _context17.prev = 6;
          _context17.t0 = _context17["catch"](0);
          res.status(500).send('Error processing request');
        case 9:
        case "end":
          return _context17.stop();
      }
    }, _callee17, null, [[0, 6]]);
  }));
  return function (_x31, _x32) {
    return _ref17.apply(this, arguments);
  };
}());
admin.get('/jhgchdh/addpairquotes', /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee18(req, res) {
    return _regeneratorRuntime().wrap(function _callee18$(_context18) {
      while (1) switch (_context18.prev = _context18.next) {
        case 0:
          _context18.prev = 0;
          _context18.next = 3;
          return (0, _addpairquotes["default"])();
        case 3:
          res.status(200).json({
            message: 'pair quotes generated'
          });
          _context18.next = 9;
          break;
        case 6:
          _context18.prev = 6;
          _context18.t0 = _context18["catch"](0);
          res.status(500).send('Error processing request');
        case 9:
        case "end":
          return _context18.stop();
      }
    }, _callee18, null, [[0, 6]]);
  }));
  return function (_x33, _x34) {
    return _ref18.apply(this, arguments);
  };
}());
admin.get('/jhgchdh/updatecommoditydatabase', /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee19(req, res) {
    return _regeneratorRuntime().wrap(function _callee19$(_context19) {
      while (1) switch (_context19.prev = _context19.next) {
        case 0:
          _context19.prev = 0;
          _context19.next = 3;
          return (0, _updatecommodities["default"])();
        case 3:
          res.status(200).json({
            message: 'commodity database updated successfully'
          });
          _context19.next = 9;
          break;
        case 6:
          _context19.prev = 6;
          _context19.t0 = _context19["catch"](0);
          res.status(500).send('error in commodity database update');
        case 9:
        case "end":
          return _context19.stop();
      }
    }, _callee19, null, [[0, 6]]);
  }));
  return function (_x35, _x36) {
    return _ref19.apply(this, arguments);
  };
}());
var _default = admin;
exports["default"] = _default;