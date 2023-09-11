import fetch from 'node-fetch';

import CryptoAsset from '../models/cryptoAsset';

async function getCryptoAssets() {
    try {
        const response = await fetch('https://api.poloniex.com/v2/currencies');
        const data = await response.json();

        const savePromises = data.map(item => {
            const cryptoAsset = new CryptoAsset({ data: item });

            return cryptoAsset.save().then(savedAsset => {
                console.log('Crypto asset saved successfully:', savedAsset);
                return savedAsset;
            }).catch(err => {
                console.error('Error saving crypto asset:', err);
            });
        });

        await Promise.all(savePromises).then(savedAssets => {
            console.log('All crypto assets saved:', savedAssets);
        }).catch(err => {
            console.error('Error saving crypto assets:', err);
        });
    } catch (error) {
        console.log(error);
    }
}

export default getCryptoAssets;