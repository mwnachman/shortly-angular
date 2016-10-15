angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth, $location) {
  // Your code here
  $scope.data = {};

  Links.getAll()
    .then(function(data) {
      $scope.data.links = data;
      console.log('initialization', $scope.data.links);
    });
  
  $scope.checkAuth = function() {
    if (!Auth.isAuth()) {
      console.log('checking is Auth');
      $location.path('/signin');
    }
  };

  $scope.redirect = function(code) {
  	window.location.href = code;
  }

});
