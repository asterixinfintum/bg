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
import cron from "node-cron";

const app = express();
const server = http.createServer(app);

import mongoose from 'mongoose';

import Asset from './models/asset';

import signupRoute from './routes/signup';
import loginRoute from './routes/login';
import logoutRoute from './routes/logout';
import clientRoute from './routes/client';



import cryptoAssetsRoute from './routes/cryptoassets';
import adminRoute from './routes/admin';
import editTrackerRoute from './routes/edittracker';
import usersettingsRoute from './routes/usersettings';
import announcementRoute from './routes/announcement';
import assetRoute from './routes/asset';
import walletroute from './wallet/routes/wllt';

import fileuploadRoute from './routes/fileupload.js';
import imageuploadRoute from './routes/imageupload.js';
import fileretrieveRoute from './routes/fileretrieve.js';
import videouploadRoute from './routes/videoupload.js';

import pairsRoute from './trade/routes/pairs.js';
import ordersRoute from './trade/routes/orders.js';
import transactionsRoute from './wallet/routes/transactions.js';

import runInventoryFunction from './functions/runInventory';
import seedAssets from './functions/seedAssets';
import getBitcoinBalances from './wallet/functions/getBitcoinBalances';

import getcryptotradedata from './trade/crypto/getcryptotradedata';
import getstockpairdata from './trade/stock/getstockpairdata';
import getcommoditiesdata from './trade/commodities/getcommoditiesdata';
import updatecryptoprices from './trade/crypto/updatecryptoprices';

import deposit from './wallet/functions/deposit';
import withdraw from './wallet/functions/withdraw';

async function callHomekeepers() {
  await getcryptotradedata();

  setTimeout(async () => {
    await getstockpairdata();

    setTimeout(async () => {
      await getcommoditiesdata();

      setTimeout(async () => {
        await updatecryptoprices();
        await getBitcoinBalances();
      }, 120000)

    }, 120000)

  }, 120000);
}

//getBitcoinBalances();

//getcryptotradedata();
//getstockpairdata();
//getcommoditiesdata();
//updatecryptoprices();

cron.schedule("*/13 * * * *", () => {
  //callHomekeepers();
});

app.use(express.static('public'));
app.use('/', express.static('public/ui'))
app.use(express.static('uploads'));
app.use(express.static('videos-directory'));
app.use(express.urlencoded({
  extended: false
}));

app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());

const PORT = process.env.PORT || 8080;

app.use(signupRoute);
app.use(loginRoute);
app.use(logoutRoute);
app.use(clientRoute);

app.use(walletroute)

//app.use(deposit);


app.use(cryptoAssetsRoute);
app.use(adminRoute);
app.use(editTrackerRoute);
app.use(usersettingsRoute);
app.use(announcementRoute);
app.use(assetRoute);
app.use(pairsRoute);
app.use(ordersRoute);
app.use(transactionsRoute);

app.use(fileuploadRoute);
app.use(imageuploadRoute);
app.use(fileretrieveRoute);
app.use(videouploadRoute);

//runInventoryFunction();

//https://api.poloniex.com/markets/LTC_BTC/orderBook
//https://api.poloniex.com/markets/price
//https://api.poloniex.com/markets/LTC_BTC/trades
//https://api.poloniex.com/markets/ticker24h
//https://api.poloniex.com/v2/currencies

mongoose.connect(`${process.env.DB}`, {
  //mongodb://db:27017/traderapiv2 =====> production
  //mongodb://127.0.0.1:27017/traderapiv2 ===> development

  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(async () => {
  console.log('connected to database');

  const assets = await Asset.find();

  if (!assets.length) {
    seedAssets({ assetType: 'crypto' });
    seedAssets({ assetType: 'stock' });
    seedAssets({ assetType: 'commodity' });
    seedAssets({ assetType: 'fiat' });
  }

  server.listen(PORT, async (error) => {
    if (error) {
      return error;
    }

    return console.log(`server started on port here now ${PORT}`);
  });
});