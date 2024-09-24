"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authenticateToken = _interopRequireDefault(require("../../utils/authenticateToken"));
var _wallet = _interopRequireDefault(require("../models/wallet"));
var _withdrawalrequest = _interopRequireDefault(require("../models/withdrawalrequest"));
var _transaction = _interopRequireDefault(require("../models/transaction"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var userwalletuser = _express["default"].Router();
userwalletuser.get('/userwallet/wallet', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$query, walletid, assettype, searchquery, start, end, userwallet, walletbalance;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context.next = 41;
            break;
          }
          _context.prev = 1;
          _req$query = req.query, walletid = _req$query.walletid, assettype = _req$query.assettype, searchquery = _req$query.searchquery, start = _req$query.start, end = _req$query.end;
          if (walletid) {
            _context.next = 6;
            break;
          }
          res.status(500).send({
            error: 'there must be a walletid present'
          });
          return _context.abrupt("return");
        case 6:
          _context.next = 8;
          return _wallet["default"].findOne({
            _id: walletid
          });
        case 8:
          userwallet = _context.sent;
          if (!userwallet) {
            _context.next = 34;
            break;
          }
          if (!assettype) {
            _context.next = 28;
            break;
          }
          if (!(start !== 'undefined' && end !== 'undefined')) {
            _context.next = 23;
            break;
          }
          if (!(searchquery !== 'undefined')) {
            _context.next = 18;
            break;
          }
          _context.next = 15;
          return userwallet.returnBalance({
            assetType: assettype,
            start: start,
            end: end,
            searchquery: searchquery
          });
        case 15:
          walletbalance = _context.sent;
          _context.next = 21;
          break;
        case 18:
          _context.next = 20;
          return userwallet.returnBalance({
            assetType: assettype,
            start: start,
            end: end
          });
        case 20:
          walletbalance = _context.sent;
        case 21:
          _context.next = 26;
          break;
        case 23:
          _context.next = 25;
          return userwallet.returnBalance({
            assetType: assettype
          });
        case 25:
          walletbalance = _context.sent;
        case 26:
          _context.next = 31;
          break;
        case 28:
          _context.next = 30;
          return userwallet.returnBalance();
        case 30:
          walletbalance = _context.sent;
        case 31:
          res.status(200).send({
            walletbalance: walletbalance
          });
          _context.next = 35;
          break;
        case 34:
          res.status(404).send({
            error: 'wallet not found'
          });
        case 35:
          _context.next = 41;
          break;
        case 37:
          _context.prev = 37;
          _context.t0 = _context["catch"](1);
          console.log(_context.t0);
          res.status(500).send({
            error: 'error finding walet'
          });
        case 41:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 37]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
userwalletuser.get('/userwallet/getall', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var userid, userwallets;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context2.next = 15;
            break;
          }
          _context2.prev = 1;
          userid = req.query.userid;
          if (userid) {
            _context2.next = 6;
            break;
          }
          res.status(500).send({
            error: 'there must be a userid present'
          });
          return _context2.abrupt("return");
        case 6:
          _context2.next = 8;
          return _wallet["default"].find({
            owner: userid
          });
        case 8:
          userwallets = _context2.sent;
          res.status(200).send({
            userwallets: userwallets
          });
          _context2.next = 15;
          break;
        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](1);
          res.status(500).send({
            error: 'error getting wallets'
          });
        case 15:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 12]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
userwalletuser.get('/userwallet/assetbalance', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var _req$query2, walletid, assetid, assetinitial, _userwallet, _balances, userwallet, balances, assetbalance;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context3.next = 26;
            break;
          }
          _context3.prev = 1;
          _req$query2 = req.query, walletid = _req$query2.walletid, assetid = _req$query2.assetid, assetinitial = _req$query2.assetinitial;
          if (!assetinitial) {
            _context3.next = 12;
            break;
          }
          if (!(!walletid || !assetinitial)) {
            _context3.next = 7;
            break;
          }
          res.status(404).send({
            error: 'there must be a assetid and a walletid present'
          });
          return _context3.abrupt("return");
        case 7:
          _context3.next = 9;
          return _wallet["default"].findOne({
            _id: walletid
          });
        case 9:
          _userwallet = _context3.sent;
          _balances = _userwallet.balances;
          return _context3.abrupt("return");
        case 12:
          if (!(!walletid || !assetid)) {
            _context3.next = 15;
            break;
          }
          res.status(404).send({
            error: 'there must be a assetid and a walletid present'
          });
          return _context3.abrupt("return");
        case 15:
          _context3.next = 17;
          return _wallet["default"].findOne({
            _id: walletid
          });
        case 17:
          userwallet = _context3.sent;
          balances = userwallet.balances;
          assetbalance = balances.find(function (blc) {
            return blc.asset_id === assetid;
          });
          res.status(200).send({
            assetbalance: assetbalance ? assetbalance.balance : 0
          });
          _context3.next = 26;
          break;
        case 23:
          _context3.prev = 23;
          _context3.t0 = _context3["catch"](1);
          res.status(500).send({
            error: 'error getting asset balance'
          });
        case 26:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 23]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
userwalletuser.post('/userwallet/request/withdraw', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var withdrawalrequest, newwithdrawalrequest;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context4.next = 13;
            break;
          }
          _context4.prev = 1;
          withdrawalrequest = {
            userid: req.body.user,
            amount: req.body.amount,
            assetid: req.body.asset,
            walletid: req.body.wallet,
            amountusd: req.body.usdamount,
            bank: req.body.Bank,
            account: req.body.Account,
            cryptoaddress: req.body.cryptoaddress,
            paypalemail: req.body.paypalemail
          };
          newwithdrawalrequest = new _withdrawalrequest["default"](withdrawalrequest);
          _context4.next = 6;
          return newwithdrawalrequest.save();
        case 6:
          res.status(200).send({
            message: 'withdrawal request processing'
          });
          _context4.next = 13;
          break;
        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](1);
          console.log(_context4.t0);
          res.status(500).send({
            error: 'error processing request'
          });
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 9]]);
  }));
  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
userwalletuser.get('/userwallet/transactions/', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var userid, transactions;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          if (!(req.user && req.user._id)) {
            _context5.next = 12;
            break;
          }
          _context5.prev = 1;
          userid = req.query.userid;
          _context5.next = 5;
          return _transaction["default"].find({
            userid: userid
          });
        case 5:
          transactions = _context5.sent;
          res.status(200).send({
            transactions: transactions
          });
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](1);
          res.status(500).send({
            error: 'error getting transactions'
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[1, 9]]);
  }));
  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = exports["default"] = userwalletuser;