//DECLARE ANGULAR
var app = angular.module('coffeeShopFinder', []);

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', function($http){
  //global this
  var controller = this;
  //function to get coffee shops
  this.getShops = function(){
  $http({
    //grab many shops by zip
    method: 'GET',
    url:'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+this.searchQuery+'&key=AIzaSyAZh1fM4eOg-ovT68WXnfIDgSYu4FU5HYM',
 })
 .then(function(response) {
   //log to test what we get back
     var lat = response.data.results[0].geometry.location.lat;
     var lng = response.data.results[0].geometry.location.lng;
    //  console.log(lat, lng);

     var LatLng = lat.toString().concat(',',lng);


     var map;
     var service;

function initialize() {
  var locatedAt = new google.maps.LatLng(lat,lng);
  // console.log(locatedAt);

  map = new google.maps.Map(document.getElementById('map'), {
      center: locatedAt,
      zoom: 15
    });

  var request = {
    location: locatedAt,
    radius: '8047',
    type: 'cafe'
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
initialize();

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      controller.places = results[i];
      console.log(controller.places.name);
      // controller.allShops = place;
    }
  }
}

   }, function(response) {
    //  console.log(response);
   })
};

}]);

//connect maps
var initMap = function() {
  var location = {lat: 40.09024, lng: -100.712891};
  new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: location
  });
}
