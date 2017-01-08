//DECLARE VARIABLES
var mongoose = require('mongoose');

//set up schema for the zip input
// var locationSchema = mongoose.Schema({
//
// });

var Location = mongoose.model('Location', locationSchema);


//EXPORT SCHEMA
module.exports = Location;
