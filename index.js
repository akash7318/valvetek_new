const express = require('express');
const cors = require('cors');
require('./db/config');

const User = require('./db/User');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', async (req, res) => {
    const user = await User.findOne({ 'username': req.body.username, 'password': req.body.password }).select('-password');
    if (user) {
        res.send({ status: true, data: user });
    } else {
        res.send({ status: false });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);