angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // Your code here
  $scope.data = {};

  console.log('links get all', Links.getAll());
  var blah = Links.getAll();
  
  console.log('this is blah', blah, blah.$$state);
});
