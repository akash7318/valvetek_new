const mongoose = require('mongoose');

const pageSchema = mongoose.Schema({
    name: String,
    slug: String,
    img: String,
    shortDescription: String,
    description: String,
    extraDescription: String,
    metaTitle: String,
    metaDescription: String,
    metaKeywords: String,
    isActive: Boolean,
});

module.exports = mongoose.model('pages', pageSchema);