require('angular')

var app = angular.module('app', [])

app.controller('MainController', function($scope,$http) {
    $scope.message = 'Angular Works!'
    $scope.date ='Ceci n\'est pas une date haha'
    $scope.refresh=function(){
		$http({
  method: 'GET',
  url: 'http://jsonplaceholder.typicode.com/posts'
}).then(function successCallback(response) {
console.log(response.data);
 	$scope.posts=response.data;
  }, function errorCallback(response) {
   	console.log('Error while fetching posts');
  });
}		
		
})
