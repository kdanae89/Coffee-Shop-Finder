//So i set up my pseudocode to give you guys a somewhat smooth easy to follow build.

//DECLARE ANGULAR
//added angular declaration
var app = angular.module('cShopFinder', []);

//create our controller, calling this one locatedShops
app.controller('locatedShops', ['$http', function($http){
  //moved our global this into our controller, its global to the controller
  var controller = this;
  //turned our http request into a function so we could call it in our html if needed (say we need it in a click)
  this.getShops = function(zipcode){
  $http({
    method:'GET',
    url:
  }).then(
      function(response) {
        //log to test
        console.log(response);
        controller.shops = response.data;
        //(so for now this section will be guesswork until i can get into our API and find what data im getting back, and how the response will be formatted.)
        console.log(response);
      }
  );
}

}]);






//})
