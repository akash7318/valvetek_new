const express = require('express');
const fs = require('fs');
const cors = require('cors');
const Path = require('path');
const fileUpload = require('express-fileupload');
const slug = require('slug')

require('./db/config');

const User = require('./db/User');
const Banner = require('./db/Banner');
const SiteInfo = require('./db/SiteInfo');
const Product = require('./db/Product');
const PromotionalCategory = require('./db/PromotionalCategory');
const KeywordInCity = require('./db/KeywordInCity');

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload());

// File upload
const uploadFile = (file, destination) => {
    const ext = Path.extname(file.name);
    const name = file.name.split('.')[0];
    const fileName = name + "-" + Date.now() + ext;
    file.mv(__dirname + destination + fileName);
    return fileName;
}

const removeFile = (file) => {
    fs.unlink(__dirname + file, (err) => {
        if (err) {
            console.error(err)
            return
        }
        //file removed
    })
}

// Login the user
app.post('/login', async (req, res) => {
    const user = await User.findOne({ 'username': req.body.username, 'password': req.body.password }).select('-password');
    if (user) {
        res.send({ status: true, data: user });
    } else {
        res.send({ status: false });
    }
});

// Site Information
app.get('/siteInfo', async (req, res) => {
    const siteInfo = await SiteInfo.findOne();
    res.send({ status: true, siteInfo: siteInfo });
});

// Update Site Information
app.post('/updateSiteInfo', async (req, res) => {
    const siteInfo = await SiteInfo.findOne();
    const logo = (res.files && res.files.logo) ? uploadFile(req.files.logo, "/public/images/") : siteInfo.logo;
    const favicon = (res.files && res.files.favicon) ? uploadFile(req.files.favicon, "/public/images/") : siteInfo.favicon;
    req.body.logo = logo;
    req.body.favicon = favicon;
    const result = await SiteInfo.updateOne({ $set: req.body });
    res.send(result);
});

// Banners list
app.get('/banners', async (req, res) => {
    const banners = await Banner.find();
    if (banners.length > 0) {
        res.send({ status: true, result: banners });
    } else {
        res.send({ status: false, message: "No Data Found." });
    }
});

// single banner
app.get('/banner/:_id', async (req, res) => {
    const banner = await Banner.findOne({ '_id': req.params._id });
    if (banner) {
        res.send({ status: true, banner: banner });
    } else {
        res.send({ status: false, message: "No data found" });
    }
});

// Create and update banner
app.post('/saveBanner', async (req, res) => {
    if (req.files && req.files.file) {
        req.body.img = uploadFile(req.files.file, "/public/images/banners/");
    }
    req.body.isActive = true;
    let banner = [];
    if (req.body.id) {
        let result = await Banner.findOne({ _id: req.body.id });
        if (req.body.img !== undefined && result.img !== undefined) {
            removeFile("/public/images/banners/" + result.img);
        }
        banner = await Banner.updateOne(
            { '_id': req.body.id },
            {
                $set: req.body
            }
        );
    } else {
        banner = new Banner(req.body);
        banner = await banner.save();
    }
    res.send({ status: true });
});

// Delete the banner
app.delete('/deleteBanner/:_id', async (req, res) => {
    let data = await Banner.findOne({ _id: req.params._id });
    if (data.img !== undefined) {
        removeFile("/public/images/banners/" + data.img);
    }
    let result = await Banner.deleteOne({ _id: req.params._id });
    if (result.acknowledged && result.deletedCount === 1) {
        res.send({ status: true, message: "Banner deleted successfully" });
    } else {
        res.send({ status: false, message: 'No banner was deleted' });
    }
});

// Activate and deactivate the banner
app.put('/changeActiveBanner/:_id', async (req, res) => {
    let result = await Banner.updateOne(
        { _id: req.params._id },
        {
            $set: req.body
        }
    );
    if (result.acknowledged && result.modifiedCount === 1) {
        res.send({ status: true, message: "Success" });
    } else {
        res.send({ status: false, message: "Failed" });
    }
});



// Products list
app.get('/products', async (req, res) => {
    const products = await Product.find();
    if (products) {
        res.send({ status: true, result: products });
    } else {
        res.send({ status: false, message: "No Data Found." });
    }
});

// single product
app.get('/product/:_id', async (req, res) => {
    const product = await Product.findOne({ '_id': req.params._id });
    if (product) {
        res.send({ status: true, product: product });
    } else {
        res.send({ status: false, message: "No data found" });
    }
});

// Create and update Product
app.post('/saveProduct', async (req, res) => {
    if (req.files && req.files.img) {
        req.body.img = uploadFile(req.files.img, "/public/images/products/");
    }
    req.body.isActive = true;
    req.body.slug = slug(req.body.name);
    let product = [];
    if (req.body.id) {
        let result = await Product.findOne({ _id: req.body.id });
        if (req.body.img !== undefined && result.img !== undefined) {
            removeFile("/public/images/products/" + result.img);
        }
        product = await Product.updateOne(
            { '_id': req.body.id },
            {
                $set: req.body
            }
        );
    } else {
        product = new Product(req.body);
        product = await product.save();
    }

    res.send({ status: true });
});

// Delete the product
app.delete('/deleteProduct/:_id', async (req, res) => {
    let data = await Product.findOne({ _id: req.params._id });
    if (data.img !== undefined) {
        removeFile("/public/images/products/" + data.img);
    }
    let result = await Product.deleteOne({ _id: req.params._id });
    if (result.acknowledged && result.deletedCount === 1) {
        res.send({ status: true, message: "Product deleted successfully" });
    } else {
        res.send({ status: false, message: 'No product was deleted' });
    }
});

// Activate and deactivate the product
app.put('/changeActiveProduct/:_id', async (req, res) => {
    let result = await Product.updateOne(
        { _id: req.params._id },
        {
            $set: req.body
        }
    );
    if (result.acknowledged && result.modifiedCount === 1) {
        res.send({ status: true, message: "Success" });
    } else {
        res.send({ status: false, message: "Failed" });
    }
});



// Promotional Category list
app.get('/promotionalCategories', async (req, res) => {
    const promotionalCategories = await PromotionalCategory.find();
    if (promotionalCategories) {
        res.send({ status: true, result: promotionalCategories });
    } else {
        res.send({ status: false, message: "No Data Found." });
    }
});

// single Promotional Category
app.get('/promotionalCategory/:_id', async (req, res) => {
    const promotionalCategory = await PromotionalCategory.findOne({ '_id': req.params._id });
    if (promotionalCategory) {
        res.send({ status: true, promotionalCategory: promotionalCategory });
    } else {
        res.send({ status: false, message: "No data found" });
    }
});

// Create and update Promotional Category
app.post('/savePromotionalCategory', async (req, res) => {
    req.body.isActive = true;
    req.body.slug = slug(req.body.name);
    let promotionalCategory = [];
    if (req.body.id) {
        promotionalCategory = await PromotionalCategory.updateOne(
            { '_id': req.body.id },
            {
                $set: req.body
            }
        );
    } else {
        promotionalCategory = new PromotionalCategory(req.body);
        promotionalCategory = await promotionalCategory.save();
    }

    res.send({ status: true });
});

// Delete the Promotional Category
app.delete('/deletePromotionalCategory/:_id', async (req, res) => {
    let result = await PromotionalCategory.deleteOne({ _id: req.params._id });
    if (result.acknowledged && result.deletedCount === 1) {
        res.send({ status: true, message: "Promotional category deleted successfully" });
    } else {
        res.send({ status: false, message: 'No Promotional category was deleted' });
    }
});

// Activate and deactivate the Promotional Category
app.put('/changeActivePromotionalCategory/:_id', async (req, res) => {
    let result = await PromotionalCategory.updateOne(
        { _id: req.params._id },
        {
            $set: req.body
        }
    );
    if (result.acknowledged && result.modifiedCount === 1) {
        res.send({ status: true, message: "Success" });
    } else {
        res.send({ status: false, message: "Failed" });
    }
});

// Keyword In City
app.get('/keywordInCity', async (req, res) => {
    const keywordInCity = await KeywordInCity.findOne();
    res.send({ status: true, keywordInCity: keywordInCity });
});

// Update Keyword In City
app.post('/updateKeywordInCity', async (req, res) => {
    const keywordInCity = await KeywordInCity.findOne();
    if (req.files && req.files.img) {
        req.body.img = uploadFile(req.files.img, "/public/images/keywordInCity/");
    };

    if (req.body.img !== undefined && keywordInCity.img !== null) {
        removeFile("/public/images/keywordInCity/" + keywordInCity.img);
    }

    const result = await KeywordInCity.updateOne({ $set: req.body });
    res.send(result);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);