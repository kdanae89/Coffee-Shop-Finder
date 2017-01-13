//DEPENDENCIES
var express = require('express');
var router = express.Router();
var Place = require('../models/place.js');

// router.get('/:_id', function(req, res) {
//   Place.findById({ _id: req.params.id }, function(err, foundPlace){
//     Place.update({ _id: req.params.id }, { $inc: {likes: 1} }, function(err, allPlaces) {
//       res.json(allPlaces);
//     });
//   });
// })

//EXPORT ROUTER
module.exports = router;
