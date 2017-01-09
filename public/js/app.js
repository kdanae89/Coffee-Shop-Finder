//DECLARE ANGULAR
//added angular declaration
var app = angular.module('coffeeShopFinder', []);



//connect maps
// app.controller('findMaps', ['$http', function($http){
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
          // (In meters, estimates roughly 5 miles)
          radius:8047,
          types: ['cafe']
        };

        var service = new google.maps.places.PlacesService(map);

        service.nearbySearch(request, callback);
      }
  // }]);

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

      google.maps.event.addDomListener(window, 'loal', initialize)
