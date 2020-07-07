const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const axios = require('axios');
// var url = require('url');
// var session = require('express-session');
// var redis = require('redis');
// var RedisStore = require('connect-redis')(session);
// const Redis = require('ioredis');
// const qrcode = require('qrcode');
// const nodemailer = require("nodemailer");
// const TeleSignSDK = require('telesignsdk');

// invoke an instance of express application.
const app = express();
app.use(cors());

// initialize body-parser to parse incoming parameters requests to req.body
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});

//listening server
app.listen(PORT, () => {
    console.log(`Listening to requests on https://localhost:${PORT}`);
  });