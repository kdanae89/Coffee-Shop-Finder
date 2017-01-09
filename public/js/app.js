//DECLARE ANGULAR
//added angular declaration
var app = angular.module('coffeeShopFinder', []);
var geocoder;
var map;

//connect maps
// app.controller('findMaps', ['$http', function($http){

var initMap = function() {
  var mapcenter = {lat: 37, lng: -95};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
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

  google.maps.event.addDomListener(window, 'load', initialize)

app.controller('findShops', [function(){
  controller = this;
  function codeAddress() {
    geocoder.geocode({
      componentRestrictions: {
        postalCode: '2000'
      }
    }, function(results, status) {
      if (status == 'OK') {
        map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        position: results[0].geometry.location
      });
    } else {
      window.alert('Geocode was not successful for the following reason: ' + status);
    }
  });
}
}]);
