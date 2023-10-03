import express from 'express';
import CryptoAsset from '../models/cryptoAsset';
import CryptoAssetPrice from '../models/cryptoAssetPrice';
import CryptoAssetTicker from '../models/cryptoAssetTicker';
import CryptoAssetsDB from '../models/cryptoAssetsDB';

const cryptoAssets = express();

async function clearCryptoAssetsData () {
  await CryptoAsset.deleteMany({}, { multi: true });
  await CryptoAssetPrice.deleteMany({}, { multi: true });
  await CryptoAssetTicker.deleteMany({}, { multi: true });
  await CryptoAssetsDB.deleteMany({}, { multi: true });

  console.log('done')
}

//clearCryptoAssetsData();



cryptoAssets.get('/assets/crypto', async (req, res) => {
  CryptoAssetsDB.find({})
    .then(cryptoAssets => {
      res.status(200).json({ cryptoAssets });
    })
    .catch(err => {
      console.error('Error retrieving CryptoAssets:', err);
      res.status(500).json({ error: 'An error occurred while retrieving CryptoAssets' });
    });
});

cryptoAssets.get('/cryptoassetstickers', async (req, res) => {
  CryptoAssetTicker.find({})
    .then(cryptoAssetsTickers => {
      res.json(cryptoAssetsTickers);
    })
    .catch(err => {
      console.error('Error retrieving CryptoAssets:', err);
      res.status(500).json({ error: 'An error occurred while retrieving CryptoAssets' });
    });
});

cryptoAssets.get('/cryptoassetsprices', async (req, res) => {
  CryptoAssetPrice.find({})
    .then(cryptoAssetsPrices => {
      res.json(cryptoAssetsPrices);
    })
    .catch(err => {
      console.error('Error retrieving CryptoAssets:', err);
      res.status(500).json({ error: 'An error occurred while retrieving CryptoAssets' });
    });
});

export default cryptoAssets;
