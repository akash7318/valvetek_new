const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('./db/config');

const User = require('./db/User');
const Banner = require('./db/Banner');

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

const PORT = process.env.PORT || 5000;
app.listen(PORT);