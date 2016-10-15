angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Your code here

  $scope.checkAuth = function() {
    if (!Auth.isAuth()) {
      console.log('checking is Auth');
      $location.path('/signin');
    }
  };

  $scope.link = {};
  $scope.isValidText = '';

  $scope.addLink = function(url) {
  	// console.log(url);
    // console.log('im in the shorten add link');
    Links.addOne(url);
  };

  $scope.signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };

  $scope.isValid = function(url) {
  	console.log(url);
  	var rValidUrl = /^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i;
    if (url) {
      if (!url.match(rValidUrl)) {
    	$scope.isValidText = 'This is not a valid URL';
      } else {
    	$scope.isValidText = '';
      }
    };
  }

  return $scope;

});
 