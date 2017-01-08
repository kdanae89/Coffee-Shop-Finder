//So i set up my pseudocode to give you guys a somewhat smooth easy to follow build.

//DECLARE ANGULAR
// var app = angular.module('', []);

//declare "this" globally within the function so that all http requests can grab
//set this equal to variable for use within the return of the http requests
var controller = this;

//create our controller, calling this one findShops
//name controller and http input for the function
app.controller('', ['$http', function($http){
  //this.getShops = function(zipcode)

  //the first thing i want to do is 'GET' 'coffee shop/cafe' data within a specific radius of our input zip code
  $http({
    method:'GET',
    url:
  }).then(
      function(response) {
        //        log response         (so for now this section will be guesswork until i can get into our API and find what data im getting back, and how the response will be formatted.)
        console.log(response);
      }
  );


}]);






//})
