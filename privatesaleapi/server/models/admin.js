const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const PrivateSaleAdminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const PrivateSaleAdmin = mongoose.model('PrivateSaleAdmin', PrivateSaleAdminSchema);

module.exports = PrivateSaleAdmin;

PrivateSaleAdminSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});