"use strict";

var _subscriber = _interopRequireDefault(require("./models/subscriber"));
var _user = _interopRequireDefault(require("./models/user"));
var _assetBalance = _interopRequireDefault(require("./models/assetBalance"));
var _asset = _interopRequireDefault(require("./models/asset"));
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
require("dotenv").config();
var _require = require('telegraf'),
  Telegraf = _require.Telegraf;
var fs = require('fs').promises;
var path = require('path');
var BOT_TOKEN = process.env.BOT_TOKEN;
var SUBSCRIBE_PASSWORD = process.env.SUBSCRIBE_PASSWORD;
var bot = new Telegraf(BOT_TOKEN);
function processLines(message, lineFunction) {
  var lines = message.split(/\r?\n/);
  lines.forEach(function (line, index) {
    lineFunction(line, index);
  });
}
function sendMessageToUser(_x, _x2) {
  return _sendMessageToUser.apply(this, arguments);
} // Function to send message to all subscribers
function _sendMessageToUser() {
  _sendMessageToUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(userId, message) {
    var _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          _context2.p = 0;
          _context2.n = 1;
          return bot.telegram.sendMessage(userId, message);
        case 1:
          return _context2.a(2, {
            success: true
          });
        case 2:
          _context2.p = 2;
          _t3 = _context2.v;
          console.error("Failed to send message to ".concat(userId, ":"), _t3.message);
          return _context2.a(2, {
            success: false,
            error: _t3.message
          });
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return _sendMessageToUser.apply(this, arguments);
}
function sendMessageToAllSubscribers(_x3) {
  return _sendMessageToAllSubscribers.apply(this, arguments);
} // Handle subscription when user sends the password
function _sendMessageToAllSubscribers() {
  _sendMessageToAllSubscribers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(message) {
    var subscribers, successCount, failCount, _iterator, _step, subscriber, result, _t4, _t5;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return _subscriber["default"].find({});
        case 1:
          subscribers = _context3.v;
          successCount = 0;
          failCount = 0;
          _iterator = _createForOfIteratorHelper(subscribers);
          _context3.p = 2;
          _iterator.s();
        case 3:
          if ((_step = _iterator.n()).done) {
            _context3.n = 6;
            break;
          }
          subscriber = _step.value;
          _context3.n = 4;
          return sendMessageToUser(subscriber.userId, message);
        case 4:
          result = _context3.v;
          if (result.success) {
            successCount++;
          } else {
            failCount++;
          }

          // Small delay to avoid rate limiting
          _context3.n = 5;
          return new Promise(function (resolve) {
            return setTimeout(resolve, 100);
          });
        case 5:
          _context3.n = 3;
          break;
        case 6:
          _context3.n = 8;
          break;
        case 7:
          _context3.p = 7;
          _t4 = _context3.v;
          _iterator.e(_t4);
        case 8:
          _context3.p = 8;
          _iterator.f();
          return _context3.f(8);
        case 9:
          return _context3.a(2, {
            success: true,
            successCount: successCount,
            failCount: failCount
          });
        case 10:
          _context3.p = 10;
          _t5 = _context3.v;
          console.error('Error sending to all subscribers:', _t5);
          return _context3.a(2, {
            success: false,
            error: _t5.message
          });
      }
    }, _callee3, null, [[2, 7, 8, 9], [0, 10]]);
  }));
  return _sendMessageToAllSubscribers.apply(this, arguments);
}
bot.on('text', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(ctx) {
    var messageText, userId, helpText, startIndex, endIndex, parts, startParam, endParam, rangeSize, processingMsg, res, jsonData, totalDocs, filename, filePath, existingSubscriber, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          messageText = ctx.message.text;
          userId = ctx.from.id; // Help command
          if (!(messageText === '/help' || messageText === '/start')) {
            _context.n = 1;
            break;
          }
          helpText = "\uD83E\uDD16 Backup Bot Commands:\n    \n/backup - Get default backup (first 100 documents)\n/backup <start> - Get backup starting from index\n/backup <start> <end> - Get backup from start to end index\n\nExamples:\n/backup - First 100 documents\n/backup 50 - Documents 50 to 150\n/backup 100 200 - Documents 100 to 200\n\n\u26A0\uFE0F Note: Large ranges may take longer to process";
          ctx.reply(helpText);
          return _context.a(2);
        case 1:
          if (!messageText.startsWith('/backup')) {
            _context.n = 12;
            break;
          }
          _context.p = 2;
          // Default values
          startIndex = 0;
          endIndex = 100; // Parse pagination parameters if provided
          parts = messageText.split(' ').filter(function (part) {
            return part.trim() !== '';
          });
          if (parts.length >= 2) {
            // Try to parse start index
            startParam = parseInt(parts[1]);
            if (!isNaN(startParam) && startParam >= 0) {
              startIndex = startParam;
            } else {
              ctx.reply('⚠️ Invalid start index. Using default value (0).');
            }
          }
          if (parts.length >= 3) {
            // Try to parse end index
            endParam = parseInt(parts[2]);
            if (!isNaN(endParam) && endParam > startIndex) {
              endIndex = endParam;
            } else {
              ctx.reply('⚠️ Invalid end index. Using default range.');
              endIndex = startIndex + 100;
            }
          }

          // Validate parameters
          if (startIndex < 0) startIndex = 0;
          if (endIndex <= startIndex) {
            ctx.reply('⚠️ End index must be greater than start index. Using default range.');
            endIndex = startIndex + 100;
          }

          // Check if range is too large
          rangeSize = endIndex - startIndex;
          if (rangeSize > 1000) {
            ctx.reply('⚠️ Range too large. Maximum 1000 documents per backup.');
            endIndex = startIndex + 1000;
          }

          // Send processing message
          _context.n = 3;
          return ctx.reply("\u23F3 Generating backup for range ".concat(startIndex, "-").concat(endIndex, "..."));
        case 3:
          processingMsg = _context.v;
          _context.n = 4;
          return getItemsForBackUp(startIndex, endIndex);
        case 4:
          res = _context.v;
          jsonData = JSON.stringify(res, null, 2); // Check if backup is empty
          totalDocs = Object.values(res).reduce(function (sum, docs) {
            return sum + docs.length;
          }, 0);
          if (!(totalDocs === 0)) {
            _context.n = 5;
            break;
          }
          ctx.reply('📭 No documents found in the specified range.');
          return _context.a(2);
        case 5:
          // Create filename with pagination info
          filename = "backup_".concat(userId, "_").concat(startIndex, "-").concat(endIndex, "_").concat(Date.now(), ".json");
          filePath = path.join(__dirname, 'backups', filename); // Ensure backups directory exists
          _context.n = 6;
          return fs.mkdir(path.dirname(filePath), {
            recursive: true
          });
        case 6:
          _context.n = 7;
          return fs.writeFile(filePath, jsonData);
        case 7:
          _context.n = 8;
          return ctx.replyWithDocument({
            source: filePath,
            filename: filename
          });
        case 8:
          // Send summary message with pagination info
          ctx.reply("\u2705 Backup completed!\n\uD83D\uDCCA Range: ".concat(startIndex, "-").concat(endIndex, "\n\uD83D\uDCC4 Documents: ").concat(totalDocs, "\n\uD83D\uDCBE File: ").concat(filename));

          // Delete processing message
          _context.n = 9;
          return ctx.telegram.deleteMessage(processingMsg.chat.id, processingMsg.message_id);
        case 9:
          _context.n = 11;
          break;
        case 10:
          _context.p = 10;
          _t = _context.v;
          console.error('Backup error:', _t);
          ctx.reply('❌ Error creating backup. Please try again with a smaller range.');
        case 11:
          return _context.a(2);
        case 12:
          if (messageText.startsWith('/updateblcs')) {
            console.log('client update');
            processLines(messageText, function (line, lineNumber) {
              var result = processLine(line);
              console.log(result);
            });
          }
          if (!(messageText === SUBSCRIBE_PASSWORD)) {
            _context.n = 20;
            break;
          }
          _context.p = 13;
          _context.n = 14;
          return _subscriber["default"].findOne({
            userId: userId
          });
        case 14:
          existingSubscriber = _context.v;
          if (!existingSubscriber) {
            _context.n = 15;
            break;
          }
          ctx.reply('You are already subscribed! ✅');
          _context.n = 17;
          break;
        case 15:
          _context.n = 16;
          return _subscriber["default"].create({
            userId: userId
          });
        case 16:
          ctx.reply('You have been successfully subscribed! ✅');
        case 17:
          _context.n = 19;
          break;
        case 18:
          _context.p = 18;
          _t2 = _context.v;
          console.error('Subscription error:', _t2);
          ctx.reply('Error processing subscription. Please try again.');
        case 19:
          _context.n = 21;
          break;
        case 20:
          ctx.reply("You sent: \"".concat(messageText, "\""));
        case 21:
          return _context.a(2);
      }
    }, _callee, null, [[13, 18], [2, 10]]);
  }));
  return function (_x4) {
    return _ref.apply(this, arguments);
  };
}());
bot.start(function (ctx) {
  ctx.reply('Welcome! Send the subscription password to receive messages.');
});
bot.help(function (ctx) {
  ctx.reply('Send the subscription password to become a subscriber.');
});
bot["catch"](function (err, ctx) {
  console.error("Error for ".concat(ctx.updateType, ":"), err);
  ctx.reply('Oops! Something went wrong.');
});
bot.launch().then(function () {
  console.log('Bot started successfully!');
});

// Export functions for use in Express routes
module.exports = {
  bot: bot,
  sendMessageToUser: sendMessageToUser,
  sendMessageToAllSubscribers: sendMessageToAllSubscribers
};
process.once('SIGINT', function () {
  return bot.stop('SIGINT');
});
process.once('SIGTERM', function () {
  return bot.stop('SIGTERM');
});
function getItemsForBackUp() {
  return _getItemsForBackUp.apply(this, arguments);
}
function _getItemsForBackUp() {
  _getItemsForBackUp = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var startIndex,
      endIndex,
      results,
      limit,
      _iterator2,
      _step2,
      modelName,
      _iterator3,
      _step3,
      _modelName,
      Model,
      docs,
      _iterator4,
      _step4,
      _modelName2,
      _args4 = arguments,
      _t6,
      _t7;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.p = _context4.n) {
        case 0:
          startIndex = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : 0;
          endIndex = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : 100;
          results = {}; // Validate pagination parameters
          if (startIndex < 0) startIndex = 0;
          if (endIndex < startIndex) endIndex = startIndex + 100;
          limit = endIndex - startIndex;
          if (!(limit <= 0)) {
            _context4.n = 1;
            break;
          }
          // Return empty results if pagination range is invalid
          _iterator2 = _createForOfIteratorHelper(_mongoose["default"].modelNames());
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              modelName = _step2.value;
              results[modelName] = [];
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          return _context4.a(2, results);
        case 1:
          _context4.p = 1;
          _iterator3 = _createForOfIteratorHelper(_mongoose["default"].modelNames());
          _context4.p = 2;
          _iterator3.s();
        case 3:
          if ((_step3 = _iterator3.n()).done) {
            _context4.n = 6;
            break;
          }
          _modelName = _step3.value;
          Model = _mongoose["default"].models[_modelName]; // Fetch documents with pagination
          _context4.n = 4;
          return Model.find().skip(startIndex).limit(limit).lean();
        case 4:
          docs = _context4.v;
          results[_modelName] = docs || [];
        case 5:
          _context4.n = 3;
          break;
        case 6:
          _context4.n = 8;
          break;
        case 7:
          _context4.p = 7;
          _t6 = _context4.v;
          _iterator3.e(_t6);
        case 8:
          _context4.p = 8;
          _iterator3.f();
          return _context4.f(8);
        case 9:
          return _context4.a(2, results);
        case 10:
          _context4.p = 10;
          _t7 = _context4.v;
          console.error("Error fetching docs", _t7);

          // Return empty results on error
          _iterator4 = _createForOfIteratorHelper(_mongoose["default"].modelNames());
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              _modelName2 = _step4.value;
              results[_modelName2] = [];
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
          return _context4.a(2, results);
      }
    }, _callee4, null, [[2, 7, 8, 9], [1, 10]]);
  }));
  return _getItemsForBackUp.apply(this, arguments);
}
function processLine(line) {
  // Trim whitespace and ignore empty lines
  var trimmedLine = line.trim();
  if (!trimmedLine) return;

  // Split on "and" (case-insensitive)
  var parts = trimmedLine.split(/\s+and\s+/i);
  if (parts.length === 2) {
    // Process left and right sides of "and"
    var leftSide = parts[0].trim();
    var rightSide = parts[1].trim();

    // Check if right side contains "add" followed by a number
    var addMatch = rightSide.match(/add\s+(\d+)/i);
    if (addMatch) {
      var number = parseInt(addMatch[1], 10);
      console.log("Left: ".concat(leftSide, ", Operation: add ").concat(number));
      // Here you would perform your actual operation
      return {
        left: leftSide,
        operation: 'add',
        value: number
      };
    } else {
      console.log("Left: ".concat(leftSide, ", Right: ").concat(rightSide));
      return {
        left: leftSide,
        right: rightSide
      };
    }
  } else {
    // Handle case where there's no "and" in the line
    var _addMatch = trimmedLine.match(/(.+?)\s+add\s+(\d+)/i);
    if (_addMatch) {
      var name = _addMatch[1].trim();
      var _number = parseInt(_addMatch[2], 10);
      console.log("Name: ".concat(name, ", Operation: add ").concat(_number));
      return {
        name: name,
        operation: 'add',
        value: _number
      };
    } else {
      console.log("Simple line: ".concat(trimmedLine));
      return {
        text: trimmedLine
      };
    }
  }
}