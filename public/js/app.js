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
    url:'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+zipcode+&key=AIzaSyBcU1ZlzkaDTnc2YWlIW5kurm9yEIdZLKE&callback
  }).then(
    /*
      now, we need to make another call with the location extracted from the results array:

      var lat = results[i].geometry.location.lat;
      var lng = results[i].geometry.location.lng;

      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json?location=lat,long&type=cafe&rankby=distance&key=AIzaSyBcU1ZlzkaDTnc2YWlIW5kurm9yEIdZLKE&callback'
    */
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

        initmap();

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

  var initialize = function() {
    geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(37, -95);
  var mapSpecs = {
    zoom: 14,
    center: mapcenter


  });

  new google.maps.Map(document.getElementById('map'), {
  zoom: 4,
  center: mapcenter
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
  console.log(request);
}

  function callback(results, status) {
    if(status == google.maps.places.PlacesServicesStatus.OK){
      for (var i =0; i < results.length; i++){
        createMarker(results[i]);
      }
    }
  }

  map = new google.maps.Map(document.getElementById('map'), mapSpecs);
};

  var codeAddress = function(){
    var address = document.getElementById('address').value;
    geocoder.geocode( {'address' : address }, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          position: results[0].geometry.location
        });
      } else {
        alert('Geocode failed because: ' + status);
      }


  // var service = new google.maps.places.PlacesService(map);
  // service.nearbySearch({
  //   location: pyrmont,
  //   radius: 500,
  //   type: ['cafe']
  // }, function(results){
  //   console.log(results)
  // });
  //
  // console.log('hi');
  function createMarker(place){
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker ({
      map: map,
      position: place.geometry.location

    });
  }

  // var service = new google.maps.places.PlacesService(map);
  // service.nearbySearch(request, callback);
  // function callback(results, status) {
  //   if(status == google.maps.places.PlacesServicesStatus.OK){
  //     for (var i =0; i < results.length; i++){
  //       createMarker(results[i]);
  //     }
  //   }
  // }

  // function createMarker(place){
  //   var placeLoc = place.geometry.location;
  //   var marker = new google.maps.Marker ({
  //     map: map,
  //     position: place.geometry.location
  //   });
  // }


  google.maps.event.addDomListener(window, 'load', initialize)
