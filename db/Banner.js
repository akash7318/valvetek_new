const mongoose = require('mongoose');

const bannerSchema = mongoose.Schema({
    name: String,
    textField1: String,
    textField2: String,
    description: String,
    img: String,
    isActive: Boolean,
});

module.exports = mongoose.model('banners', bannerSchema);