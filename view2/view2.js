'use strict';

angular.module('myApp.view2', ['ngRoute', 'ngMessages'])

.controller('AddShowCtrl', ['$scope', 'myFactory', function($scope, myFactory) {
	
	$scope.shows = myFactory.getShows();
	
	$scope.showname = "Show name";
	$scope.showdate = new Date();
	$scope.counter = 0;
	
    $scope.addShow = function() {
		
		  $scope.shows.push({
			  name: $scope.showname,
			  date: $scope.showdate,
			  season: $scope.showseason,
			  episode: $scope.showepisode,
		  });
			
          $scope.showname = '';
		  $scope.counter++;
		  myFactory.setShows($scope.shows);
    };
	
}]);