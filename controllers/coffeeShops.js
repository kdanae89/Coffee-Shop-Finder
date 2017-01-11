//DEPENDENCIES
var express = require('express');
var router = express.Router();
var Place = require('../models/place.js');

// Get all cafes
router.get('/', function(req, res) {
  Place.find({}, function(err, allPlaces){
    res.json(allPlaces);
  })
});


router.post('/', function(req, res) {
  Place.create(req.body, function(err, foundPlace){
    Place.find({}, function(err, allPlaces) {
      res.json(allPlaces);
    })
  });
})

//EXPORT ROUTER
module.exports = router;
