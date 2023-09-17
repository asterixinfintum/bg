import fetch from 'node-fetch';

import CryptoAssetPrice from '../models/cryptoAssetPrice';

async function getCryptoAssetsPrices() {
    try {
        const response = await fetch('https://api.poloniex.com/markets/price');
        const data = await response.json();

        //console.log(data);

        const savePromises = data.map(item => {
            const cryptoAssetPrice = new CryptoAssetPrice({ data: item });

            return cryptoAssetPrice.save().then(savedAssetPrice => {
                //console.log('Crypto asset saved successfully:', savedAssetPrice);
                return savedAssetPrice;
            }).catch(err => {
                console.error('Error saving crypto asset:', err);
            });
        });

        const savedAssetPrices = await Promise.all(savePromises);

        //console.log('All crypto assets saved:', savedAssetPrices);
    } catch (error) {
        console.log('Error:', error);
    }
}

export default getCryptoAssetsPrices;