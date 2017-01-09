//DECLARE ANGULAR
//added angular declaration
var app = angular.module('coffeeShopFinder', []);

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
    center: mapcenter
  })

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






//})

  google.maps.event.addDomListener(window, 'load', initialize)
