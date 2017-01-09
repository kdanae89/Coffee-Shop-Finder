//DECLARE ANGULAR
//added angular declaration
var app = angular.module('coffeeShopFinder', []);
var geocoder;
var map;

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', function($http){
  //moved our global this into our controller, its global to the controller, outside of the controller "this" is not the controller and thats what we need "this" to be.
  var controller = this;
  //turned our http request into a function so we could call it in our html if needed (say we need it in a click)
  this.getShops = function(zipcode){
  $http({
    method:'GET',
    url:''
  }).then(
      function(response) {
        //log to test
        console.log(response);
        controller.shops = response.data;
        //(so for now this section will be guesswork until i can get into our API and find what data im getting back, and how the response will be formatted.)
      },
      function(response) {
        console.log(response);
      });
    }

}]);

//connect maps
var initMap = function() {

        var uluru = {lat: 37, lng: -95};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 12,
          center: uluru
        });
        new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: uluru
        });

        var request = {
          location: center,
          radius:8047,
          types: ['cafe']
        };

        var service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, callback);
      }

      function callback(results, status) {
        if(status == google.maps.places.PlacesServicesStatus.OK){
          for (var i =0; i < results.length; i++){
            createMarker(results[i]);
          }
        }

  var mapcenter = {lat: 37, lng: -95};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: mapcenter;
  });
  new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: mapcenter;
  });



  var request = {
    location: center,
    // (In meters, estimates roughly 5 miles)
    postalCode: 'postalCode',
    radius:8047,
    type: ['cafe']
  };
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
  function callback(results, status) {
    if(status == google.maps.places.PlacesServicesStatus.OK){
      for (var i =0; i < results.length; i++){
        createMarker(results[i]);
      }
    }
  }

  function createMarker(place){
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker ({
      map: map,
      position: place.geometry.location
    });
  }






//})

  google.maps.event.addDomListener(window, 'load', initialize)

