//DECLARE VARIABLES
var mongoose = require('mongoose');

var placeSchema = mongoose.Schema({
	//changed from name because there are repeats of names, need unique id
	id: String,
	likes: { type: Number, default: 0 }
})

var Place = mongoose.model('Place', placeSchema);


//EXPORT SCHEMA
module.exports = Place;
