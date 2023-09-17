import CryptoAsset from '../models/cryptoAsset';
import CryptoAssetPrice from '../models/cryptoAssetPrice';
import CryptoAssetTicker from '../models/cryptoAssetTicker';
import CryptoAssetsDB from '../models/cryptoAssetsDB';

import getCryptoAssets from './getCryptoAssets';
import getCryptoAssetsTickers from './getCryptoAssetsTickers';
import getCryptoAssetsPrices from './getCryptoAssetsPrices';

const topThirty = [
    "BTC", "ETH", "XRP", "LTC", "BCH", "ADA",
    "XLM", "EOS", "BNB", "USDT", "XMR", "DASH",
    "NEO", "BSV", "TRX", "VET", "TEZ", "DOGE",
    "COSM", "POLY", "LINK", "UNI", "NEM", "ONT",
    "BAT", "USDC", "SNX", "MKR", "COMP", "ALGO"
];

async function updateCryptoAssets() {
    try {
        await deleteAllSubjects(CryptoAsset);
        await deleteAllSubjects(CryptoAssetTicker);
        await deleteAllSubjects(CryptoAssetPrice);

        await getCryptoAssets();
        await getCryptoAssetsTickers();
        await getCryptoAssetsPrices();

        const cryptoassets = await getAllSubjects(CryptoAsset);
        const cryptoassetsprices = await getAllSubjects(CryptoAssetPrice);
        const cryptoassetstickers = await getAllSubjects(CryptoAssetTicker);

        for (let cryptoassetObj of cryptoassets) {
            const { coin } = cryptoassetObj.data;

            const cryptoassetsprice = cryptoassetsprices.filter(item => getCharactersBeforeUnderscore(item.data.symbol) === coin && topThirty.includes(coin));
            const cryptoassetsticker = cryptoassetstickers.filter(item => getCharactersBeforeUnderscore(item.data.symbol) === coin && topThirty.includes(coin));

            if (cryptoassetsprice[0] !== undefined && cryptoassetsticker[0] !== undefined) {

                const prevdbCryptoAssset = await CryptoAssetsDB.findOne({ coin });

                const previousPrice = prevdbCryptoAssset.price;
                const priceChange = {
                    pricechange: previousPrice,
                    updated: Date.now()
                }

                const priceChanges = prevdbCryptoAssset.priceChanges;
                priceChanges.push(priceChange);

                const { price, dailyChange } = cryptoassetsprice[0].data;
                const { high, low } = cryptoassetsticker[0].data;

                const dbCryptoAssset = await CryptoAssetsDB.findOneAndUpdate(
                    { coin },
                    { $set: { 
                        high,
                        low,
                        price,
                        dailyChange,
                        previousPrice,
                        priceChanges
                     } },
                    { new: true }
                );

                //console.log(dbCryptoAssset, 'done')
            }
        }


    } catch (error) {
        console.log(error, 'there is an error here yo');
    }
}

async function deleteAllSubjects(Subject) {
    try {
        await Subject.deleteMany({});
        return true;
    } catch (error) {
        throw error;
    }
}

async function getAllSubjects(Subject) {
    try {
        const allsubjects = await Subject.find();
        return allsubjects;
    } catch (error) {
        throw error;
    }
}

function getCharactersBeforeUnderscore(str) {
    const parts = str.split('_');
    return parts[0];
}

export default updateCryptoAssets;