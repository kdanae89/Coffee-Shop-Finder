//DEPENDENCIES
var express = require('express');
var router = express.Router();
var Place = require('../models/place.js');

// Get all cafes by id
router.get('/:id', function(req, res) {
  Place.findById(req.params.id, function(err, foundShop){
    res.json(foundShop);
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
