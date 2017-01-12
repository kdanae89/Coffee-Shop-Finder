//DECLARE ANGULAR
var app = angular.module('coffeeShopFinder', ['ngRoute']);

app.config(function() {

})

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', '$scope', function($http, $scope){
  //global this
  var controller = this;
  //function to get coffee shops
  this.getLikes = function(id) {
    console.log(id);
    $http({
      method:'POST',
      url:'mongodb://heroku_dbf6wnbd:i57nisvaofc2u7idpha4lljoke@ds157268.mlab.com:57268/heroku_dbf6wnbd',
      data: this.id
    }).then(
      function(response) {//success
        controller.likes = response.data;
        console.log(controller.likes);
      }
    );
  }
  this.getShops = function(){
    //grab many shops by zip
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
          // service.nearbySearch(request, callback);
          service.nearbySearch(request, function(results) {
            $scope.$apply(function() {
              console.log(results);
              controller.places = results;
            })
          });


          var infowindow = new google.maps.InfoWindow({
            content: "hi kaylie"
          });

          var marker = new google.maps.Marker({
            position: locatedAt,
            map: map,
            title: 'Details'
          });
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
      }
      initialize();
  })



    function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var shops = [];
        results.forEach(function(shop) {
          shops.push(shop);
        });
        controller.places = shops;
        console.log(controller.places);
      // return controller.places;
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
