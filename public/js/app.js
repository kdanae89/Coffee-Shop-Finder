//Declare angular
var app = angular.module('coffeeShopFinder', ['ngRoute']);

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', '$scope', function($http, $scope){
  //global this
  var controller = this;
  //function to get coffee shops
  this.getShops = function(){
    //grab coffee shops by zip
    $http({
      method: 'GET',
      url:'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+this.searchQuery+'&key=AIzaSyDtX8DgraL4-rsLJOk4QEYYa8zUUQR6uUE',
    })
    // get latitude and longitude from response
    .then(function(response) {
      var lat = response.data.results[0].geometry.location.lat;
      var lng = response.data.results[0].geometry.location.lng;
      console.log(lat, lng);

      var map;

      function initialize() {
        var locatedAt = new google.maps.LatLng(lat,lng);
        console.log(locatedAt);

        map = new google.maps.Map(document.getElementById('map'), {
          center: locatedAt,
          zoom: 15
        });

        var request = {
          location: locatedAt,
          types: ['cafe'],
          rankBy: google.maps.places.RankBy.DISTANCE
        };

        // initalize service API variable
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, getPlaces);
      }

      function getPlaces(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var shops = [];
          results.forEach(function(shop) {
            shops.push(shop);
            var lat = shop.geometry.location.lat();
            var lng = shop.geometry.location.lng();
            LatLng = new google.maps.LatLng(lat,lng);

            var infowindow = new google.maps.InfoWindow({
              content: "hi kaylie"
            });

            var marker = new google.maps.Marker({
              position: LatLng,
              map: map,
              title: 'Details'
            });
            marker.addListener('click', function() {
              infowindow.open(map, marker);
            });

            $scope.$apply(function() {
              console.log(shop);
              controller.places = shops;
            })
          });
          console.log(controller.places);
        }
      }
      initialize()
    })
  }
}]);

// connect maps
function initMap() {
  var map;
  var location = {lat: 40.09024, lng: -100.712891};
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: location
  });
}



//
//
// var contentString = '<ul id="results">' +
//   '<li>  {{shop.name}} @ {{shop.vicinity}}</li>' +
// '</ul>';
//
//
