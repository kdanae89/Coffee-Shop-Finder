//DEPENDENCIES
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyAZh1fM4eOg-ovT68WXnfIDgSYu4FU5HYM'
});

// PORT
var port = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.static('public'));
app.use(bodyParser.json());

// REQUIRE CONTROLLER
var findShops = require('./controllers/coffeeShops.js');

// CONTROLLER MIDDLEWARE
  app.use('/', findShops);

//DB
var db = mongoose.connection;

var mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/coffee_shop_finder';

mongoose.connect(mongoUri);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('DB: Connected');
});

app.listen(port, function() {
  console.log('---------------------------------');
  console.log('Server running on port: ' + port);
  console.log('---------------------------------');
});
