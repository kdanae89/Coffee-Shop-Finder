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
      url:'https://maps.googleapis.com/maps/api/geocode/json?components=postal_code:'+this.searchQuery+'&key=AIzaSyAZh1fM4eOg-ovT68WXnfIDgSYu4FU5HYM',
    })
    .then(function(response) {
        var lat = response.data.results[0].geometry.location.lat;
        var lng = response.data.results[0].geometry.location.lng;
        //  console.log(lat, lng);
        var LatLng = lat.toString().concat(',',lng);

        var map;
        var service;
        var geocoder = new google.maps.Geocoder;

        function initialize() {
          var locatedAt = new google.maps.LatLng(lat,lng);
          // console.log(locatedAt);

          map = new google.maps.Map(document.getElementById('map'), {
            center: locatedAt,
            zoom: 15
          });

          var request = {
            location: locatedAt,
            types: ['cafe'],
            rankBy: google.maps.places.RankBy.DISTANCE
          };


          service = new google.maps.places.PlacesService(map);
          $scope.$apply(function() {
            service.nearbySearch(request, getPlaces);
            service.nearbySearch(request, getMarkers);
          })
        }
        initialize();
      })
      function getPlaces(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var shops = [];
          results.forEach(function(shop) {
            shops.push(shop);
          });
          controller.places = shops;
          console.log(controller.places);
        }
      }

      function getLatLng() {
        var LatLng;
        geocoder.geocode( { 'LatLng' : LatLng }, function(results) {
          LatLng = results.geometry.location
        });
        return LatLng;
      }

      var newMarker = new google.maps.Marker({
        position: LatLng
      });

      function getMarkers(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          results.forEach(function(result) {
            getLatLng();
            var infowindow = new google.maps.InfoWindow({
              content: {
                Name: result.name,
                Rating: result.rating,
                Address: result.vicinity,
              }
            });
            newMarker.addListener('click', function() {
              infowindow.open(map, newMarker);
            });
          })
        }
      }
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
