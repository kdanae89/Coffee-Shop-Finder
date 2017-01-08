//DECLARE VARIABLES
var mongoose = require('mongoose');

//set up schema for the zip input
// var locationSchema = mongoose.Schema({
//
// });
var locationSchema = mongoose.Schema({
	zip: Number
})

var Location = mongoose.model('Location', locationSchema);


//EXPORT SCHEMA
module.exports = Location;
