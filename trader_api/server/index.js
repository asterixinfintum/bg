if (process.env.NODE_ENV !== 'production') {
  require("dotenv").config();
}

import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';
import socket from 'socket.io';

const app = express();
const server = http.createServer(app);

import mongoose from 'mongoose';

import signupRoute from './routes/signup';
import loginRoute from './routes/login';
import logoutRoute from './routes/logout';
import clientRoute from './routes/client';
import cryptoAssetsRoute from './routes/cryptoassets';
import adminRoute from './routes/admin';
import editTrackerRoute from './routes/edittracker';
import walletRoute from './routes/wallet';
import botstrategyRoute from './routes/tradingbot';
import usersettingsRoute from './routes/usersettings';
import announcementRoute from './routes/announcement';
import orderRoute from './routes/order';

import seedDBCryptoAssets from './functions/seedDBCryptoAssets';
import updateCryptoAssets from './functions/updateCryptoAssets';

app.use(express.static('public'));
app.use('/', express.static('public/ui'))
app.use('/uploads', express.static('uploads'));
app.use(express.urlencoded({
    extended: false
}));
  
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(signupRoute);
app.use(loginRoute);
app.use(logoutRoute);
app.use(clientRoute);
app.use(cryptoAssetsRoute);
app.use(adminRoute);
app.use(editTrackerRoute);
app.use(walletRoute);
app.use(botstrategyRoute);
app.use(usersettingsRoute);
app.use(announcementRoute);
app.use(orderRoute);

//seedDBCryptoAssets();
//updateCryptoAssets();

//https://api.poloniex.com/markets/LTC_BTC/orderBook
//https://api.poloniex.com/markets/price
//https://api.poloniex.com/markets/LTC_BTC/trades
//https://api.poloniex.com/markets/ticker24h
//https://api.poloniex.com/v2/currencies

mongoose.connect('mongodb://127.0.0.1:27017/traderapiv11', {
  //mongodb://db:27017/traderapiv2 =====> production
  //mongodb://127.0.0.1:27017/traderapiv2 ===> development

    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(() => {
    console.log('connected to database');

    server.listen(PORT, async (error) => {
      if (error) {
        return error;
      }
    
      return console.log(`server started on port here now ${PORT}`);
    });
});