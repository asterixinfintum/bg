"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("regenerator-runtime/runtime.js");
var _express = _interopRequireDefault(require("express"));
var _http = _interopRequireDefault(require("http"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
var _socket = _interopRequireDefault(require("socket.io"));
var _nodeCron = _interopRequireDefault(require("node-cron"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _asset = _interopRequireDefault(require("./models/asset"));
var _signup = _interopRequireDefault(require("./routes/signup"));
var _login = _interopRequireDefault(require("./routes/login"));
var _logout = _interopRequireDefault(require("./routes/logout"));
var _client = _interopRequireDefault(require("./routes/client"));
var _asset2 = _interopRequireDefault(require("./routes/asset"));
var _wllt = _interopRequireDefault(require("./wallet/routes/wllt"));
var _routes = _interopRequireDefault(require("./admin/routes"));
var _fileupload = _interopRequireDefault(require("./routes/fileupload.js"));
var _imageupload = _interopRequireDefault(require("./routes/imageupload.js"));
var _videoupload = _interopRequireDefault(require("./routes/videoupload.js"));
var _pairs = _interopRequireDefault(require("./trade/routes/pairs.js"));
var _orders = _interopRequireDefault(require("./trade/routes/orders.js"));
var _assets = _interopRequireDefault(require("./trade/routes/assets.js"));
var _transactions = _interopRequireDefault(require("./wallet/routes/transactions.js"));
var _seedAssets = _interopRequireDefault(require("./functions/seedAssets"));
var _getBitcoinBalances = _interopRequireDefault(require("./wallet/functions/getBitcoinBalances"));
var _getprices = _interopRequireDefault(require("./trade/getprices.js"));
var _updatetradingpairsorders = _interopRequireDefault(require("./trade/updatetradingpairsorders.js"));
var _setonlineuser = _interopRequireDefault(require("./functions/setonlineuser"));
var _setofflineuser = _interopRequireDefault(require("./functions/setofflineuser"));
var _setpairinview = _interopRequireDefault(require("./functions/setpairinview"));
var _setpairoutofview = _interopRequireDefault(require("./functions/setpairoutofview"));
var _authenticateToken = _interopRequireDefault(require("./utils/authenticateToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}
var app = (0, _express["default"])();
var server = _http["default"].createServer(app);
var allowlist = ["http://localhost:3000", 'https://bvxtrade.com', 'https://www.bvxtrade.com'];
var corsOptionsDelegate = function corsOptionsDelegate(req, callback) {
  var corsOptions;
  var isDomainAllowed = allowlist.indexOf(req.header('Origin')) !== -1;
  if (isDomainAllowed) {
    corsOptions = {
      origin: true
    };
  } else {
    corsOptions = {
      origin: false
    };
  }
  callback(null, corsOptions);
};
app.use((0, _cors["default"])(corsOptionsDelegate));
var io = (0, _socket["default"])(server, {
  cors: {
    origin: ["http://localhost:3000", "https://bvxtrade.com", "http://www.bvxtrade.com"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Authorization"],
    credentials: true
  }
});

//import fileretrieveRoute from './routes/fileretrieve.js';

io.on('connection', function (socket) {
  console.log('A user connected');
  socket.on('disconnect', function () {
    console.log('User disconnected');
    if (socket.user) {
      (0, _setofflineuser["default"])(socket.user._id);
    }
  });
  socket.on('pairinview', function (data) {
    (0, _setpairinview["default"])(data.pairid);
  });
  socket.on('pairoutofview', function (data) {
    (0, _setpairoutofview["default"])(data.pairid);
  });
});
io.use( /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(socket, next) {
    var token, actualToken, onlineuser;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          token = socket.handshake.headers.authorization;
          if (!(token && token.startsWith('Bearer '))) {
            _context.next = 8;
            break;
          }
          actualToken = token.split(' ')[1];
          _context.next = 5;
          return (0, _setonlineuser["default"])(actualToken);
        case 5:
          onlineuser = _context.sent;
          if (onlineuser) {
            socket.user = {
              _id: onlineuser._id,
              firstname: onlineuser.firstname,
              lastname: onlineuser.lastname,
              email: onlineuser.email
            };
          }

          //console.log(socket.user )

          next();
        case 8:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
function getCurrentDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = ('0' + (now.getMonth() + 1)).slice(-2); // Months are zero-based
  var day = ('0' + now.getDate()).slice(-2);
  var hours = ('0' + now.getHours()).slice(-2);
  var minutes = ('0' + now.getMinutes()).slice(-2);
  return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
}
_nodeCron["default"].schedule("*/1 * * * *", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
  var date;
  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
    while (1) switch (_context2.prev = _context2.next) {
      case 0:
        date = getCurrentDateTime();
        _context2.next = 3;
        return (0, _getprices["default"])(date);
      case 3:
        io.emit('assetupdate');
      case 4:
      case "end":
        return _context2.stop();
    }
  }, _callee2);
})));
var isGeneratingOrder = false;
_nodeCron["default"].schedule("*/2 * * * * *", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
  return _regeneratorRuntime().wrap(function _callee3$(_context3) {
    while (1) switch (_context3.prev = _context3.next) {
      case 0:
        if (!isGeneratingOrder) {
          isGeneratingOrder = true;
          try {
            //await updatetradingpairsorders();

            io.emit('getorders');
          } catch (error) {
            console.error('Error during order generation:', error);
          }
          isGeneratingOrder = false;
        } else {
          console.log('Previous operation still running. Skipping new execution.');
        }
      case 1:
      case "end":
        return _context3.stop();
    }
  }, _callee3);
})));
var staticPath = _path["default"].join(__dirname, '../public');
app.use(_express["default"]["static"](staticPath));

// Serve static files (like index.html) from the "public/ui" folder
app.use(_express["default"]["static"](_path["default"].join(__dirname, '../public/ui')));
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());
var PORT = process.env.PORT || 8082;
app.use(_signup["default"]);
app.use(_login["default"]);
app.use(_logout["default"]);
app.use(_client["default"]);
app.use(_wllt["default"]);
app.use(_routes["default"]);
app.use(_asset2["default"]);
app.use(_pairs["default"]);
app.use(_orders["default"]);
app.use(_assets["default"]);
app.use(_transactions["default"]);
app.use(_fileupload["default"]);
app.use(_imageupload["default"]);
app.use(_videoupload["default"]);
app.get('*', function (req, res) {
  res.sendFile(_path["default"].join(staticPath, 'ui/index.html'));
});
_mongoose["default"].connect("".concat(process.env.DB), {
  //mongodb://db:27017/traderapiv2 =====> production
  //mongodb://127.0.0.1:27017/traderapiv2 ===> development

  useNewUrlParser: true,
  useUnifiedTopology: true
}).then( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
  var assets;
  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
    while (1) switch (_context5.prev = _context5.next) {
      case 0:
        console.log('connected to database');
        _context5.next = 3;
        return _asset["default"].find();
      case 3:
        assets = _context5.sent;
        if (!assets.length) {
          (0, _seedAssets["default"])({
            assetType: 'crypto'
          });
          (0, _seedAssets["default"])({
            assetType: 'stock'
          });
          (0, _seedAssets["default"])({
            assetType: 'commodity'
          });
          (0, _seedAssets["default"])({
            assetType: 'fiat'
          });
        }
        server.listen(PORT, /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(error) {
            return _regeneratorRuntime().wrap(function _callee4$(_context4) {
              while (1) switch (_context4.prev = _context4.next) {
                case 0:
                  if (!error) {
                    _context4.next = 2;
                    break;
                  }
                  return _context4.abrupt("return", error);
                case 2:
                  return _context4.abrupt("return", console.log("server started on port here now ".concat(PORT)));
                case 3:
                case "end":
                  return _context4.stop();
              }
            }, _callee4);
          }));
          return function (_x3) {
            return _ref5.apply(this, arguments);
          };
        }());
      case 6:
      case "end":
        return _context5.stop();
    }
  }, _callee5);
})));