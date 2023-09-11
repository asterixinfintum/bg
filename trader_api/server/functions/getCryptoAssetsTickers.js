import fetch from 'node-fetch';

import CryptoAssetTicker from '../models/cryptoAssetTicker';

async function getCryptoAssetsTickers() {
    try {
        const response = await fetch('https://api.poloniex.com/markets/ticker24h');
        const data = await response.json();

        console.log(data);

        const savePromises = data.map(item => {
            const cryptoAssetTicker = new CryptoAssetTicker({ data: item });

            return cryptoAssetTicker.save().then(savedTicker => {
                console.log('Crypto asset saved successfully:', savedTicker);
                return savedTicker;
            }).catch(err => {
                console.error('Error saving crypto asset:', err);
            });
        });

        await Promise.all(savePromises).then(savedTicker => {
            console.log('All crypto assets saved:', savedTicker);
        }).catch(err => {
            console.error('Error saving crypto assets:', err);
        });
    } catch (error) {
        console.log(error);
    }
}

export default getCryptoAssetsTickers;