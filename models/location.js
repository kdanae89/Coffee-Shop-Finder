//DECLARE VARIABLES
var mongoose = require('mongoose');

var locationSchema = mongoose.Schema({
	zip: Number
})

var Location = mongoose.model('Location', locationSchema);


//EXPORT SCHEMA
module.exports = Location;
