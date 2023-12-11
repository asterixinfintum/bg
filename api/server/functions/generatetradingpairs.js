import Asset from '../models/asset';
import Pair from '../models/pair';

async function generatetradingpairs() {
    const assets = await Asset.find();

    const pairs = [];

    for (let i = 0; i < assets.length; i++) {
        for (let j = i + 1; j < assets.length; j++) {
            const pair1 = {
                baseAssetId: assets[i]._id,
                baseAsset: assets[i].symbol,
                quoteAsset: assets[j].symbol,
                quoteAssetId: assets[j]._id,
                pair: `${assets[i].symbol}/${assets[j].symbol}`,
                price: assets[i].price / assets[j].price
            };
            const pair2 = {
                baseAssetId: assets[j]._id,
                baseAsset: assets[j].symbol,
                quoteAsset: assets[i].symbol,
                quoteAssetId: assets[i]._id,
                pair: `${assets[j].symbol}/${assets[i].symbol}`,
                price: assets[j].price / assets[i].price
            };
            pairs.push(pair1, pair2);
        }
    }

    for (const pair of pairs) {
        const newPair = new Pair(pair);
        await newPair.save();
    }

    console.log('Pairs saved to the database');
}

export default generatetradingpairs