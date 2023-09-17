import fetch from 'node-fetch';

import stockAssetsDB from '../models/stockAssetsDB';

import stocks from '../utils/stockSymbols';

const base_url = `${process.env.ALKSTOCKURL}`;
const symbol = 'IBM';

async function seedDBStockAssets() {
    //console.log(`${base_url}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALK}`)
    //const response = await fetch(`${base_url}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALK}`);
    //const data = await response.json();

    //console.log(data)

    /*stocks.forEach(async (stock, index) => {
        const { symbol, name } = stock;
        const response = await fetch(`${base_url}/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.ALK}`);
        const data = await response.json();

        console.log(data, symbol, name, index);
    });*/
}

export default seedDBStockAssets;