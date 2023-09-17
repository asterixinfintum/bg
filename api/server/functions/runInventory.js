import CryptoAsset from '../models/cryptoAsset';

import seedDBCryptoAssets from './seedDBCryptoAssets';
import updateCryptoAssets from './updateCryptoAssets';

async function runInventory() {
    return new Promise(async (resolve, reject) => {
        try {
            const cryassets = await CryptoAsset.find();
            if (cryassets && cryassets.length) {
                await updateCryptoAssets();
                console.log('updated')
            } else {
                await seedDBCryptoAssets();
                console.log('seeded');
            }
        } catch (error) {
            console.log(error, 'error fetching crypto data')
        }
    });
}

export default runInventory;