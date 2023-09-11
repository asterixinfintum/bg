if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
}

import "regenerator-runtime/runtime.js";
import express from "express";
import http from "http";
import bodyParser from 'body-parser';
import path from 'path';
import cors from 'cors';

import cron from "node-cron";
import { exec } from "child_process";

const app = express();
const server = http.createServer(app);

import mongoose from 'mongoose';

import newWalletRoute from './routes/newwallet';
import findWalletRoute from './routes/findwallet';
import getWalletsRoute from './routes/getwallets';

import getBitcoinBalancesFunction from './functions/getBitcoinBalances';
import sendBitcoinFunction from './functions/send.bitcoin';

cron.schedule("*/5 * * * *", () => {
    getBitcoinBalancesFunction()
});

//getBitcoinBalancesFunction();

app.use(express.urlencoded({
    extended: false
}));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT;

app.use(newWalletRoute);
app.use(findWalletRoute);
app.use(getWalletsRoute);

mongoose.connect('mongodb://127.0.0.1:27017/bitcoinapiv1', {
    //mongodb://db:27017/bitcoinapiv1 =====> production
    //mongodb://127.0.0.1:27017/bitcoinapiv1 ===> development

    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to bitcoin database');

    server.listen(PORT, async (error) => {
        if (error) {
            return error;
        }

        return console.log(`bitcoin server started on port here now ${PORT}`);
    });
});