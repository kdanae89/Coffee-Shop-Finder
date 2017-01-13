//DECLARE VARIABLES
var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
	vicinity: {type: String, unique: true},
	id: String	
})

var Place = mongoose.model('Place', placeSchema);


//EXPORT SCHEMA
module.exports = Place;
