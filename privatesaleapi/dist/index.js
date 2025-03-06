"use strict";

if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose'); // Import Mongoose

var app = express();
app.use(cors());
app.use(bodyParser.json());
var UserRoutes = require('./routes/user');
var AdminRoutes = require('./routes/admin');
app.use(UserRoutes);
app.use(AdminRoutes);
var MONGODB_URI = process.env.DB;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  console.log('Connected to MongoDB');
  var PORT = process.env.PORT;
  app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
  });
})["catch"](function (error) {
  console.error('Error connecting to MongoDB:', error);
});