'use strict';
angular.module('myApp.view1', ['ngRoute'])

.controller('ViewShowsCtrl', [ '$scope', 'myFactory', function($scope, myFactory) {

	$scope.watchnow = false;

	$scope.shows = myFactory.getShows();
	
	if($scope.shows.length == 0){
		$scope.noshows="No shows here yet!"
	}

	$scope.deleteShow = function(show) {

		var deleteIndex = -1;
		$scope.shows.forEach(function(e, i) {
			if(e.name === show.name) {
				deleteIndex = i;
			}
		});

		$scope.shows.splice(deleteIndex, 1);

		myFactory.setShows($scope.shows);
	};

}]);