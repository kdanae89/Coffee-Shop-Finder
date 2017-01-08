//DEPENDENCIES
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Location = require('../models/location.js')

//get '/' and display initial information (the only initial info wed have that is stored locally is the radius for the drop down if we do that.)

//we will only need to have more routes if were displaying any data from our local database. Anything from our API will come from http requests viz

//EXPORT ROUTER
module.exports = router;
