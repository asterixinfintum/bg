const mongoose = require('mongoose');
const { Schema } = mongoose;

import Asset from './asset';
import PriceHistory from './pricehistory';

function calculatePercentageChange(originalValue, newValue) {
    const difference = newValue - originalValue;
    const percentageChange = (difference / originalValue) * 100;
    // Format the result with a '+' sign for positive changes
    return (percentageChange > 0 ? "+" : "") + percentageChange.toFixed(2) + '%';
}

function getRandomPrice(basePrice, maxVariation) {
    // Generate a random number within the range of -maxVariation to +maxVariation
    const variation = (Math.random() * maxVariation * 2) - maxVariation;

    // Add the variation to the base price and ensure the result is not negative
    const newPrice = Math.max(0, basePrice + variation).toFixed(8);

    return parseFloat(newPrice); // Convert string back to a float, with precision for small values
}

const pairSchema = new Schema({
    pair: {
        type: String,
        required: true
    },
    baseAsset: {
        type: String,
        required: true
    },
    baseAssetId: {
        type: String,
        required: true
    },
    baseAssetType: {
        type: String,
    },
    quoteAsset: {
        type: String,
        required: true
    },
    quoteAssetId: {
        type: String,
        required: true
    },
    quoteAssetType: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    orders: {
        type: Array,
        default: []
    },
    pricehistory: [],
    inview: {
        type: Boolean,
        required: true,
        default: false
    },
});

pairSchema.methods.calculatePrice = async function () {
    try {
        const baseAsset = await Asset.findById(this.baseAssetId);
        const quoteAsset = await Asset.findById(this.quoteAssetId);

        if (!baseAsset || !quoteAsset) {
            throw new Error('Assets not found');
        }

        return baseAsset.price / quoteAsset.price;
    } catch (error) {
        console.error('Error calculating price:', error.message);
        return null;
    }
};

pairSchema.methods.calculatepricedifference = async function () {
    try {
        const baseAsset = await Asset.findById(this.baseAssetId);
        const quoteAsset = await Asset.findById(this.quoteAssetId);

        if (!baseAsset || !quoteAsset) {
            throw new Error('Assets not found');
        }

        const baseassetlatestpricehistory = baseAsset.pricehistory[0];
        const quoteassetlatestpricehistory = quoteAsset.pricehistory[0];

        const baseassetlastpricehistory = baseAsset.pricehistory[5];
        const quoteassetlastpricehistory = quoteAsset.pricehistory[5];

        if (baseassetlatestpricehistory && quoteassetlatestpricehistory && baseassetlastpricehistory && quoteassetlastpricehistory) {
            const priceone = baseassetlatestpricehistory.price / quoteassetlatestpricehistory.price;
            const pricetwo = baseassetlastpricehistory.price / quoteassetlastpricehistory.price;

            return calculatePercentageChange(priceone, pricetwo)
        } else {
            console.log('check here')
            return 0
        }

    } catch (error) {
        console.error('Error calculating price:', error.message, this.pair);
        return null;
    }
}

pairSchema.methods.gendumborders = async function () {
    const getRandomValue = () => Math.random() < 0.5 ? parseFloat((Math.random() * 0.009 + 0.001).toFixed(4)) : parseFloat((Math.random() * 7 + 1).toFixed(4));
    let ordersresult = []

    try {
        const orders = await Promise.all(
            Array.from({ length: 70 }, async (_, i) => {
                const calculateprice = await this.calculatePrice();
                const price = getRandomPrice(calculateprice, 1); // Ensure getRandomPrice function is defined
                const amount = getRandomValue();
                const total = amount * price;

                // Set 'side' based on whether 'i' is even or odd
                const side = i % 2 === 0 ? 'buy' : 'sell';

                const dumborder = { price, amount, total, side };
                return dumborder;
            })
        );

        ordersresult = orders

        const pairitem = await Pair.findOne({ _id: this._id });

        if (pairitem) {
            pairitem.orders = ordersresult;

            await pairitem.save();
        }

    } catch (error) {
        console.error(error);
    }
};

pairSchema.methods.getpricehistory = async function () {
    try {
        const baseAsset = await Asset.findById(this.baseAssetId);
        const quoteAsset = await Asset.findById(this.quoteAssetId);

        const baseAssetPriceHistory = await PriceHistory.find({ asset: baseAsset._id });
        const quoteAssetPriceHistory = await PriceHistory.find({ asset: quoteAsset._id });

        const baseAssetPriceHistoryMap = new Map();

        baseAssetPriceHistory.forEach(item => {
            baseAssetPriceHistoryMap.set(item.datetime, item);
        });

        const combinedPriceHistory = [];

        quoteAssetPriceHistory.forEach(item => {
            if (baseAssetPriceHistoryMap.has(item.datetime)) {
                const data = {
                    datetime: item.datetime,
                    baseAssetData: baseAssetPriceHistoryMap.get(item.datetime),
                    quoteAssetData: item,
                    price: baseAssetPriceHistoryMap.get(item.datetime).price / item.price
                }

                combinedPriceHistory.push(data);
            }
        });

        return combinedPriceHistory;
    } catch (error) {
        console.error(error);
    }
}

const Pair = mongoose.model('Pair', pairSchema);

module.exports = Pair;