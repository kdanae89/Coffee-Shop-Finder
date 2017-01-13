//DEPENDENCIES
var express = require('express');
var router = express.Router();
var Place = require('../models/place.js');

router.post('/', function(req, res) {
  Place.create(req.body, function(err, foundPlace){
    Place.find({}, function(err, allPlaces) {
      res.json(allPlaces);
    })
  });
})

router.get('/:_id', function(req, res) {
  Place.findById({ _id: req.params.id }, function(err, foundPlace){
    Place.update({ _id: req.params.id }, { $inc: {likes: 1} }, function(err, allPlaces) {
      res.json(allPlaces);
    });
  });
})

// router.put('/:_id', function(req, res) {
//   Place.findByIdAndUpdate(req.params.id, req.body, function() {
    // code
  // })
  // else, make a new entry in db
// })

//EXPORT ROUTER
module.exports = router;
