const mongoose = require('mongoose');

const keywordInCitySchema = mongoose.Schema({
    img: String,
    shortDescription: String,
    description: String,
    extraDescription: String,
    metaTitle: String,
    metaDescription: String,
    metaKeywords: String,
});

module.exports = mongoose.model('keywordincities', keywordInCitySchema);