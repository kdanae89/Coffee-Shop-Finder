//DECLARE ANGULAR
var app = angular.module('coffeeShopFinder', []);

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', '$httpProvider', function($http, '$httpProvider'){
  //global this
  var controller = this;
  //get our zip into our url
  //function to get a list of shop locations
  this.getShops = function(){
  $http({
    //grab many shops by zip
    method: 'GET',
    url:'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+this.searchQuery+'&key=AIzaSyAZh1fM4eOg-ovT68WXnfIDgSYu4FU5HYM',
 })
 .then(function(response) {
 //     //log to test what we get back
     var lat = response.data.results[0].geometry.location.lat;
     var lng = response.data.results[0].geometry.location.lng;
     console.log(lat, lng);
     var latlng = lat.toString().concat(',',lng);
     return latlng;
 }).then(function(latlng) {
   $http({
    method:'GET',
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+latlng+'&type=cafe&rankby=distance&key=AIzaSyAZh1fM4eOg-ovT68WXnfIDgSYu4FU5HYM'
   }).then(function(response) {
     console.log(response.data.results[0].name);
   }, function(reason) {
     console.log(reason);
   })
 });
}
}]);

//connect maps
var initMap = function() {
  var location = {lat: 40.09024, lng: -100.712891};
  new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: location
  });
}

//         var request = {
//           location: center,
//           radius:8047,
//           types ['cafe']
//         };
//
//         var service = new google.maps.places.PlacesService(map);
//
//         service.nearbySearch(request, callback);
//       }
//
//       function callback(results, status) {
//         if(status == google.maps.places.PlacesServicesStatus.OK){
//           for (var i =0; i < results.length; i++){
//             createMarker(results[i]);
//           }
//         }
//       }
//
//       function createMarker(place){
//         var placeLoc = place.geometry.location;
//         var marker = new google.maps.Marker ({
//           map: map,
//           position: place.geometry.location
//         });
//       }
