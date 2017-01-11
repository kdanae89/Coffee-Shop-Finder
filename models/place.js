//DECLARE VARIABLES
var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
	likes: { type: Number, default: 0 }
})

var Place = mongoose.model('Place', placeSchema);


//EXPORT SCHEMA
module.exports = Place;
