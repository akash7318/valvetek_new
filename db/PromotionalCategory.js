const mongoose = require('mongoose');

const promotionalCategoriesSchema = mongoose.Schema({
    name: String,
    slug: String,
    shortDescription: String,
    description: String,
    extraDescription: String,
    metaTitle: String,
    metaDescription: String,
    metaKeywords: String,
    isActive: Boolean,
});

module.exports = mongoose.model('promotionalcategories', promotionalCategoriesSchema);