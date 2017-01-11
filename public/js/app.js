//DECLARE ANGULAR
var app = angular.module('coffeeShopFinder', []);

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', function($http){
  //global this
  var controller = this;
  //get our zip into our url
  this.searchQuery = 'zipcode';
  //function to get a list of shop locations
  this.getShops = function(){
  $http({
    method: 'GET',
    //grab many shops by zip
    url:'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+this.searchQuery+'&key=AIzaSyBcU1ZlzkaDTnc2YWlIW5kurm9yEIdZLKE&callback'
 }).then(function(response) {
     //log to test what we get back
     console.log(response.data.results[0].geometry.location.lat);
     console.log(response.data.results[0].geometry.location.lng);
     var lat = response.data.results[0].geometry.location.lat;
     var lng = response.data.results[0].geometry.location.lng;
     var latlng = lat.toString().concat(',',lng);
     $http({
       method:'GET',
       dataType: 'jsonp',
       cache: false,
       url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+latlng+'&type=cafe&rankby=distance&key=AIzaSyBcU1ZlzkaDTnc2YWlIW5kurm9yEIdZLKE&callback',
      success: function(response){
                alert(response);
              }
     }).then(function(stuff) {
       console.log(stuff);
     }), function(stuff) {
       console.log(stuff);
     }
   }), function(response) {
     console.log(response);
   }
  //  $http({
  //    method:'GET',
  //    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?location='+lat+' ,'+lng+'&type=cafe&rankby=distance&key=AIzaSyBcU1ZlzkaDTnc2YWlIW5kurm9yEIdZLKE&callback'
  //  }).then(function(stuff) {
  //    console.log(stuff);
  //  }), function(stuff) {
  //    console.log(stuff);
  //  }
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
//
      google.maps.event.addDomListener(window, 'load', initialize)
//
//
//
// })
