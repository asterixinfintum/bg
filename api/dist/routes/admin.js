"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _multer = _interopRequireDefault(require("multer"));
var _user = _interopRequireDefault(require("../models/user"));
var _wllt = _interopRequireDefault(require("../wallet/models/wllt"));
var _editTracker = _interopRequireDefault(require("../models/editTracker"));
var _admin = _interopRequireDefault(require("../models/admin"));
var _inHouseAsset = _interopRequireDefault(require("../models/inHouseAsset"));
var _authenticateToken = _interopRequireDefault(require("../utils/authenticateToken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var admin = (0, _express["default"])();

/*async function deleteAllAdmins() {
    try {
        const result = await Admin.deleteMany({});
        console.log('Deleted admins:', result.deletedCount);
    } catch (err) {
        console.error('Error deleting admins:', err);
    }
}

//deleteAllAdmins();

/*
{
    "message": "Admin credentials saved successfully.",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzMxNDk4Yzk3NTQxZDJiZjA0Zjg1ZSIsImlhdCI6MTY5MDUwNjM5Mn0.nS3tTO47v_vltzqJxbRcbXA5OvHzhgFLG8QyUdI9T1o",
    "adminData": {
        "username": "daemon",
        "password": "password",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzMxNDk4Yzk3NTQxZDJiZjA0Zjg1ZSIsImlhdCI6MTY5MDUwNjM5Mn0.nS3tTO47v_vltzqJxbRcbXA5OvHzhgFLG8QyUdI9T1o"
    }
}
*/

/*function deleteAllInHouseAssets() {
    InHouseAsset.deleteMany({}, (err) => {
        if (err) {
            console.error('Error deleting all InHouseAsset:', err);
        } else {
            console.log('All InHouseAsset documents deleted successfully.');
        }
    });
}

deleteAllInHouseAssets();*/

/*const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file if it's not an image
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5  // Allow images up to 5MB
    },
    fileFilter: fileFilter
});*/

var upload = (0, _multer["default"])({
  dest: 'uploads/'
});
admin.get('/allusers', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var users, items;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _user["default"].find();
        case 3:
          users = _context2.sent;
          _context2.next = 6;
          return Promise.all(users.map( /*#__PURE__*/function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(user) {
              var wallets;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _wllt["default"].find({
                      ownerId: user._id
                    });
                  case 2:
                    wallets = _context.sent;
                    return _context.abrupt("return", {
                      wallets: wallets,
                      user: user
                    });
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x3) {
              return _ref2.apply(this, arguments);
            };
          }()));
        case 6:
          items = _context2.sent;
          res.status(200).send({
            users: items
          });
          _context2.next = 13;
          break;
        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send(_context2.t0);
        case 13:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 10]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
admin.post('/editwallet', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var update, walletid, wallet;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          update = req.body.update;
          walletid = req.query.walletid;
          _context3.next = 5;
          return _wllt["default"].findOne({
            _id: walletid
          });
        case 5:
          wallet = _context3.sent;
          wallet.balance = update;
          wallet.save();
          res.status(200).send({
            message: 'saved update'
          });
          _context3.next = 14;
          break;
        case 11:
          _context3.prev = 11;
          _context3.t0 = _context3["catch"](0);
          res.status(500).send(_context3.t0);
        case 14:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 11]]);
  }));
  return function (_x4, _x5) {
    return _ref3.apply(this, arguments);
  };
}());
admin.get('/alladmins', /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var masterkey;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          masterkey = req.query.masterkey;
          if (masterkey && masterkey === process.env.masterKey) {
            _admin["default"].find({}, function (err, admins) {
              if (err) {
                console.error('Error fetching Admins:', err);
              } else {
                console.log('All Admins:', admins);
                res.json({
                  message: 'Admins found successfully.',
                  admins: admins
                });
              }
            });
          }
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function (_x6, _x7) {
    return _ref4.apply(this, arguments);
  };
}());
admin.get('/admin/master', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var _req$query, admin_id, masterkey;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _req$query = req.query, admin_id = _req$query.admin_id, masterkey = _req$query.masterkey;
          if (masterkey && masterkey === process.env.masterKey) {
            _admin["default"].findOne({
              _id: admin_id
            }, function (err, adminitem) {
              if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
              }

              res.json({
                message: 'Admin found successfully.',
                adminitem: adminitem
              });
            });
          }
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function (_x8, _x9) {
    return _ref5.apply(this, arguments);
  };
}());
admin.post('/admin/signup', /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var masterkey, receivedCredentials, adminUser;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          masterkey = req.query.masterkey;
          if (masterkey && masterkey === process.env.masterKey) {
            try {
              receivedCredentials = req.body;
              adminUser = new _admin["default"](receivedCredentials);
              adminUser.save().then(function (_ref7) {
                var username = _ref7.username,
                  password = _ref7.password;
                res.json({
                  message: 'Admin credentials saved successfully.',
                  adminData: {
                    username: username,
                    password: password
                  }
                });
              })["catch"](function (error) {
                res.status(500).json({
                  message: 'An error occurred while saving admin credentials.',
                  error: error
                });
              });
            } catch (error) {
              console.log(error);
            }
          }
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function (_x10, _x11) {
    return _ref6.apply(this, arguments);
  };
}());
admin.post('/admin/login', /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var _req$body, user_name, password;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          try {
            _req$body = req.body, user_name = _req$body.user_name, password = _req$body.password;
            _admin["default"].findOne({
              username: user_name,
              password: password
            }, function (err, adminitem) {
              if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
              }

              var token = _jsonwebtoken["default"].sign({
                username: adminitem.username
              }, process.env.secretKeyJWT);
              adminitem.token = token;
              adminitem.save().then(function (_ref9) {
                var _id = _ref9._id,
                  username = _ref9.username,
                  password = _ref9.password,
                  token = _ref9.token;
                res.json({
                  message: 'Credentials saved successfully.',
                  token: token,
                  adminData: {
                    _id: _id,
                    username: username,
                    password: password,
                    token: token
                  }
                });
              })["catch"](function (error) {
                console.error('Error saving credentials:', error);
                res.status(500).json({
                  error: 'An error occurred while saving admin credentials.'
                });
              });
            });
          } catch (error) {
            console.log(error);
          }
        case 1:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function (_x12, _x13) {
    return _ref8.apply(this, arguments);
  };
}());
admin.get('/admin/', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var admin_id;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          admin_id = req.query.admin_id;
          _admin["default"].findOne({
            _id: admin_id
          }, function (err, adminitem) {
            if (err || !adminitem) {
              return res.sendStatus(401); // Unauthorized
            }

            var token = adminitem.token,
              _id = adminitem._id,
              username = adminitem.username,
              password = adminitem.password;
            res.json({
              message: 'Admin found successfully.',
              token: token,
              adminData: {
                _id: _id,
                username: username,
                password: password,
                token: token
              }
            });
          });
        case 2:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function (_x14, _x15) {
    return _ref10.apply(this, arguments);
  };
}());
admin.get('/getusers', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var users;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _user["default"].find();
        case 3:
          users = _context9.sent;
          res.status(200).json({
            users: users
          });
          _context9.next = 10;
          break;
        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          console.log(_context9.t0);
        case 10:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 7]]);
  }));
  return function (_x16, _x17) {
    return _ref11.apply(this, arguments);
  };
}());
admin.get('/getuser', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var userId, user;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          userId = req.query.client_id;
          _context10.next = 4;
          return _user["default"].findById(userId);
        case 4:
          user = _context10.sent;
          res.status(200).json({
            user: user
          });
          _context10.next = 12;
          break;
        case 8:
          _context10.prev = 8;
          _context10.t0 = _context10["catch"](0);
          console.error('Error finding user by ID:', _context10.t0);
          return _context10.abrupt("return", null);
        case 12:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 8]]);
  }));
  return function (_x18, _x19) {
    return _ref12.apply(this, arguments);
  };
}());
admin.put('/edituser', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(req, res) {
    var userId, oldUserValues, _req$body2, password, phonenumber, verified, editedBy, customFields, transactionFeePercentage, conditions, update, options;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          _context11.prev = 0;
          userId = req.query.client_id;
          _context11.next = 4;
          return _user["default"].findOne({
            _id: userId
          });
        case 4:
          oldUserValues = _context11.sent;
          _req$body2 = req.body, password = _req$body2.password, phonenumber = _req$body2.phonenumber, verified = _req$body2.verified, editedBy = _req$body2.editedBy, customFields = _req$body2.customFields;
          if (customFields.transactionFeePercentage) {
            transactionFeePercentage = customFields.transactionFeePercentage;
          }
          conditions = {
            _id: userId
          };
          update = {
            verified: verified,
            customFields: customFields,
            password: password,
            phonenumber: phonenumber,
            transactionFeePercentage: transactionFeePercentage
          };
          options = {
            "new": true
          };
          _user["default"].findOneAndUpdate(conditions, update, options, function (err, updatedUser) {
            if (err) {
              console.error('Error updating user:', err);
            } else {
              var editTracker = new _editTracker["default"]({
                oldattributes: oldUserValues,
                newattributes: updatedUser,
                clientEdited: updatedUser._id,
                editedBy: editedBy
              });
              editTracker.save().then(function (saveEditTracker) {
                res.status(200).json({
                  updatedUser: updatedUser
                });
              });
            }
          });
          _context11.next = 16;
          break;
        case 13:
          _context11.prev = 13;
          _context11.t0 = _context11["catch"](0);
          console.log(_context11.t0);
        case 16:
        case "end":
          return _context11.stop();
      }
    }, _callee11, null, [[0, 13]]);
  }));
  return function (_x20, _x21) {
    return _ref13.apply(this, arguments);
  };
}());
admin.post('/createinhouseasset', _authenticateToken["default"], upload.single('selectedImage'), /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(req, res) {
    var admin_id, submission;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          try {
            admin_id = req.query.admin;
            submission = req.body;
            _admin["default"].findOne({
              _id: admin_id
            }, function (err, adminitem) {
              if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
              }

              if (req.file) {
                var asset = new _inHouseAsset["default"](submission);
                asset.createdBy = admin_id;
                asset.symbolImg = req.file.path;
                asset.save().then(function (savedAsset) {
                  res.json({
                    message: 'Asset credentials saved successfully.',
                    savedAsset: savedAsset
                  });
                })["catch"](function (error) {
                  res.status(500).json({
                    message: 'An error occurred while saving asset.',
                    error: error
                  });
                });
              }
            });
          } catch (error) {
            res.status(500).json({
              message: 'An error occurred while saving asset.',
              error: error
            });
          }
        case 1:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return function (_x22, _x23) {
    return _ref14.apply(this, arguments);
  };
}());

//seed inhouseaset db

admin.post('/seedcreateinhouseasset', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13(req, res) {
    var admin_id, submission;
    return _regeneratorRuntime().wrap(function _callee13$(_context13) {
      while (1) switch (_context13.prev = _context13.next) {
        case 0:
          try {
            admin_id = req.query.admin;
            submission = req.body;
            _admin["default"].findOne({
              _id: admin_id
            }, function (err, adminitem) {
              if (err || !adminitem) {
                return res.sendStatus(401); // Unauthorized
              }

              var asset = new _inHouseAsset["default"](submission);
              asset.createdBy = admin_id;
              asset.save().then(function (savedAsset) {
                res.json({
                  message: 'Asset credentials saved successfully.',
                  savedAsset: savedAsset
                });
              })["catch"](function (error) {
                res.status(500).json({
                  message: 'An error occurred while saving asset.',
                  error: error
                });
              });
            });
          } catch (error) {
            res.status(500).json({
              message: 'An error occurred while saving asset.',
              error: error
            });
          }
        case 1:
        case "end":
          return _context13.stop();
      }
    }, _callee13);
  }));
  return function (_x24, _x25) {
    return _ref15.apply(this, arguments);
  };
}());
var getAllInHouseAssets = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
    var assets;
    return _regeneratorRuntime().wrap(function _callee14$(_context14) {
      while (1) switch (_context14.prev = _context14.next) {
        case 0:
          _context14.prev = 0;
          _context14.next = 3;
          return _inHouseAsset["default"].find();
        case 3:
          assets = _context14.sent;
          return _context14.abrupt("return", assets);
        case 7:
          _context14.prev = 7;
          _context14.t0 = _context14["catch"](0);
          console.error('Error fetching InHouseAssets:', _context14.t0);
          throw _context14.t0;
        case 11:
        case "end":
          return _context14.stop();
      }
    }, _callee14, null, [[0, 7]]);
  }));
  return function getAllInHouseAssets() {
    return _ref16.apply(this, arguments);
  };
}();
admin.get('/inhouseassets', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee15(req, res) {
    return _regeneratorRuntime().wrap(function _callee15$(_context15) {
      while (1) switch (_context15.prev = _context15.next) {
        case 0:
          try {
            getAllInHouseAssets().then(function (assets) {
              return res.json({
                assets: assets
              });
            })["catch"](function (error) {
              return console.error(error);
            });
          } catch (error) {
            console.log(error);
          }
        case 1:
        case "end":
          return _context15.stop();
      }
    }, _callee15);
  }));
  return function (_x26, _x27) {
    return _ref17.apply(this, arguments);
  };
}());
admin.get('/inhouseasset', _authenticateToken["default"], /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee16(req, res) {
    var assetId, asset;
    return _regeneratorRuntime().wrap(function _callee16$(_context16) {
      while (1) switch (_context16.prev = _context16.next) {
        case 0:
          assetId = req.query.assetId;
          _context16.next = 3;
          return _inHouseAsset["default"].findById(assetId);
        case 3:
          asset = _context16.sent;
          if (asset) {
            res.json({
              asset: asset
            });
          } else {
            res.json({
              message: 'asset not found'
            });
          }
        case 5:
        case "end":
          return _context16.stop();
      }
    }, _callee16);
  }));
  return function (_x28, _x29) {
    return _ref18.apply(this, arguments);
  };
}());
admin.put('/inhouseasset', _authenticateToken["default"], upload.single('selectedImage'), /*#__PURE__*/function () {
  var _ref19 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee17(req, res) {
    var assetId, adminId;
    return _regeneratorRuntime().wrap(function _callee17$(_context17) {
      while (1) switch (_context17.prev = _context17.next) {
        case 0:
          assetId = req.query.assetId;
          adminId = req.query.adminId;
          _admin["default"].findOne({
            _id: adminId
          }, function (err, adminitem) {
            if (err || !adminitem) {
              return res.sendStatus(401);
            }
            if (req.file) {
              var updatesContent = req.body;
              var updates = _objectSpread(_objectSpread({}, updatesContent), {}, {
                $push: {
                  editedBy: adminId
                }
              });
              updates.symbolImg = req.file.path;
              _inHouseAsset["default"].findOneAndUpdate({
                _id: assetId
              }, updates, {
                "new": true,
                useFindAndModify: false
              }).then(function (inhouseasset) {
                if (inhouseasset) {
                  res.json({
                    message: 'Asset updated successfully.',
                    inhouseasset: inhouseasset
                  });
                } else {
                  console.log('inHouseasset not found.');
                }
              })["catch"](function (err) {
                return console.error('Error:', err);
              });
            } else {
              var _updatesContent = req.body;
              var _updates = _objectSpread(_objectSpread({}, _updatesContent), {}, {
                $push: {
                  editedBy: adminId
                }
              });
              _inHouseAsset["default"].findOneAndUpdate({
                _id: assetId
              }, _updates, {
                "new": true,
                useFindAndModify: false
              }).then(function (inhouseasset) {
                if (inhouseasset) {
                  res.json({
                    message: 'Asset updated successfully.',
                    inhouseasset: inhouseasset
                  });
                } else {
                  console.log('inHouseasset not found.');
                }
              })["catch"](function (err) {
                return console.error('Error:', err);
              });
            }
          });
        case 3:
        case "end":
          return _context17.stop();
      }
    }, _callee17);
  }));
  return function (_x30, _x31) {
    return _ref19.apply(this, arguments);
  };
}());
admin.put('/delistinhouseasset', _authenticateToken["default"], function (req, res) {
  var assetId = req.query.assetId;
  var adminId = req.query.adminId;
  _admin["default"].findOne({
    _id: adminId
  }, function (err, adminitem) {
    if (err || !adminitem) {
      return res.sendStatus(401);
    }
    _inHouseAsset["default"].findOneAndUpdate({
      _id: assetId
    }, {
      delisted: true
    }, {
      "new": true,
      useFindAndModify: false
    }).then(function (inhouseasset) {
      if (inhouseasset) {
        res.json({
          message: 'Asset updated successfully.',
          inhouseasset: inhouseasset
        });
      }
    });
  });
});
admin.put('/relistinhouseasset', _authenticateToken["default"], function (req, res) {
  var assetId = req.query.assetId;
  var adminId = req.query.adminId;
  _admin["default"].findOne({
    _id: adminId
  }, function (err, adminitem) {
    if (err || !adminitem) {
      return res.sendStatus(401);
    }
    _inHouseAsset["default"].findOneAndUpdate({
      _id: assetId
    }, {
      delisted: false
    }, {
      "new": true,
      useFindAndModify: false
    }).then(function (inhouseasset) {
      if (inhouseasset) {
        res.json({
          message: 'Asset updated successfully.',
          inhouseasset: inhouseasset
        });
      }
    });
  });
});
var _default = admin;
exports["default"] = _default;