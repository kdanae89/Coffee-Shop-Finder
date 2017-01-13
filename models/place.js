//DECLARE VARIABLES
var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
	vicinity: {type: String, unique: true},
	likes: { type: Number, default: 0 }
})

var Place = mongoose.model('Place', placeSchema);


//EXPORT SCHEMA
module.exports = Place;
