const mongoose = require('mongoose');
const { Schema } = mongoose;

const BtcAddressSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    registrantId: {
        type: String,
    }
})

const BtcAddress = mongoose.model('BtcAddress', BtcAddressSchema);

module.exports = BtcAddress;