//DECLARE ANGULAR
//added angular declaration
var app = angular.module('coffeeShopFinder', []);
var geocoder;
var map;


//create our controller, calling this one locatedShops


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
