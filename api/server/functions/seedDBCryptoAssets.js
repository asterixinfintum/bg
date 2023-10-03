import CryptoAsset from '../models/cryptoAsset';
import CryptoAssetPrice from '../models/cryptoAssetPrice';
import CryptoAssetTicker from '../models/cryptoAssetTicker';
import CryptoAssetsDB from '../models/cryptoAssetsDB';

import getCryptoAssets from './getCryptoAssets';
import getCryptoAssetsTickers from './getCryptoAssetsTickers';
import getCryptoAssetsPrices from './getCryptoAssetsPrices';

async function seedDBCryptoAssets() {
    return new Promise(async (resolve, reject) => {
        try {
            await getCryptoAssets();
            await getCryptoAssetsTickers();
            await getCryptoAssetsPrices();

            const cryptoassets = await getAllSubjects(CryptoAsset);
            const cryptoassetsprices = await getAllSubjects(CryptoAssetPrice);
            const cryptoassetstickers = await getAllSubjects(CryptoAssetTicker);

            const topThirty = [
                "BTC", "ETH", "XRP", "LTC", "BCH", "ADA",
                "XLM", "EOS", "BNB", "USDT", "XMR", "DASH",
                "NEO", "BSV", "TRX", "VET", "TEZ", "DOGE",
                "COSM", "POLY", "LINK", "UNI", "NEM", "ONT",
                "BAT", "USDC", "SNX", "MKR", "COMP", "ALGO"
            ];

            for (let cryptoassetObj of cryptoassets) {
                const { name, coin } = cryptoassetObj.data;

                const cryptoassetsprice = cryptoassetsprices.filter(item => getCharactersBeforeUnderscore(item.data.symbol) === coin && topThirty.includes(coin));
                const cryptoassetsticker = cryptoassetstickers.filter(item => getCharactersBeforeUnderscore(item.data.symbol) === coin && topThirty.includes(coin));

                if (cryptoassetsprice[0] !== undefined && cryptoassetsticker[0] !== undefined) {

                    const { symbol, price, time } = cryptoassetsprice[0].data;
                    const {
                        open,
                        low,
                        high,
                        close,
                        quantity,
                        amount,
                        tradeCount,
                        startTime,
                        closeTime,
                        displayName,
                        bid,
                        bidQuantity,
                        ask,
                        askQuantity,
                        markPrice,
                    } = cryptoassetsticker[0].data;

                    const cryptoAssetDB = {
                        name,
                        coin,
                        symbol,
                        price,
                        time,
                        open,
                        low,
                        high,
                        close,
                        quantity,
                        amount,
                        tradeCount,
                        startTime,
                        closeTime,
                        displayName,
                        bid,
                        bidQuantity,
                        ask,
                        askQuantity,
                        markPrice
                    }

                    createCryptoAssetItem(cryptoAssetDB);
                }
            }
        } catch (error) {
            console.log(error);
        }
    });
}

async function getAllSubjects(Subject) {
    try {
        const allsubjects = await Subject.find();
        return allsubjects;
    } catch (error) {
        throw error;
    }
}

async function createCryptoAssetItem(data) {
    try {
        // Create a new CryptoAssetsDB document with the provided data
        const newItem = new CryptoAssetsDB(data);
        const savedItem = await newItem.save();

        //console.log('Created CryptoAsset item:', savedItem);
        return savedItem;
    } catch (error) {
        console.error('Error creating CryptoAsset item:', error);
        throw error;
    }
}

function getCharactersBeforeUnderscore(str) {
    const parts = str.split('_');
    return parts[0];
}

export default seedDBCryptoAssets;