const mongoose = require('mongoose');
const { Schema } = mongoose;

const assetSchema = new Schema({
    name: {
        type: String,
        required: true,
        index: true,
        default: '',
    },
    coin: {
        type: String,
        required: true,
        index: true,
        default: '',
    },
    symbol: {
        type: String,
        required: true,
        index: true,
        default: '',
    },
    assetType: {
        type: String,
        required: true,
        index: true,
        default: '',
    },
    price: {
        type: String,
        required: true,
        index: true,
        default: '',
    },
    image: {
        type: String,
        required: true,
        index: true,
    }
});

assetSchema.statics.updateAssetPrice = async function (_id, price) {
    const asset = await this.findOne({ _id });
    asset.price = price;
    await asset.save();
}

const Asset = mongoose.model('asset', assetSchema);

module.exports = Asset;