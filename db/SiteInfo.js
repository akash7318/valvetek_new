const mongoose = require('mongoose');

const siteInfoSchema = mongoose.Schema({
    compName: String,
    primaryMail: String,
    secondaryMail: String,
    primaryPhone: String,
    secondaryPhone: String,
    logo: String,
    favicon: String,
    primaryAddress: String,
    secondaryAddress: String,
    thirdAddress: String,
    fourthAddress: String,
    facebook: String,
    twitter: String,
    whatsapp: String,
    instagram: String,
    linkedIn: String,
    pinterest: String,
    youtube: String,
    googleAnalytic: String,
    footerText: String,

});

module.exports = mongoose.model('siteinfos', siteInfoSchema);