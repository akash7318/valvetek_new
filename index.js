const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('./db/config');

const User = require('./db/User');
const Banner = require('./db/Banner');
const SiteInfo = require('./db/SiteInfo');

const app = express();
app.use(express.json());
app.use(cors());

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, callback) {
            callback(null, "public/images");
        },
        filename: function (req, file, callback) {
            callback(null, file.fieldname + "-" + Date.now() + ".jpg");
        }
    })
}).single('file');

app.post('/login', async (req, res) => {
    const user = await User.findOne({ 'username': req.body.username, 'password': req.body.password }).select('-password');
    if (user) {
        res.send({ status: true, data: user });
    } else {
        res.send({ status: false });
    }
});

app.post('/createBanner', upload, async (req, res) => {
    req.body.img = req.file.filename;
    req.body.isActive = true;
    const banner = new Banner(req.body);
    let result = await banner.save();
    res.send(result);
});

app.get('/banners', async (req, res) => {
    const banners = await Banner.find();
    res.send({ status: true, result: banners });
});

app.get('/banner/:_id', async (req, res) => {
    const banner = await Banner.findOne({ '_id': req.params._id });
    if (banner) {
        res.send({ status: true, banner: banner });
    } else {
        res.send({ status: false, message: "No data found" });
    }
});

app.post('/saveBanner', upload, async (req, res) => {
    req.body.img = req.file ? req.file.filename : null;
    req.body.isActive = true;
    let banner = [];
    if (req.body.id) {
        let result = await Banner.findOne({ _id: req.body.id });
        req.body.img = req.file ? req.file.filename : result.img;
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
    res.send({ status: true, banner: banner });
});

app.delete('/deleteBanner/:_id', async (req, res) => {
    let result = await Banner.deleteOne({ _id: req.params._id });
    if (result.acknowledged && result.deletedCount === 1) {
        res.send({ status: true, message: "Banner deleted successfully" });
    } else {
        res.send({ status: false, message: 'No banner was deleted' });
    }
});

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);