const mongoose = require('mongoose');
const { Schema } = mongoose;

const PinSchema = new Schema({
    email: { type: String, required: true, unique: true },
    pin: {
        type: String,
        required: true
    }
})

const Pin = mongoose.model('Pin', PinSchema);

module.exports = Pin;