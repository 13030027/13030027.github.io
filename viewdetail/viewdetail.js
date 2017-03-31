'use strict';

angular.module('myApp.viewdetail', ['ngRoute', 'ngMessages'])

.controller('ShowDetailCtrl', ['$window', '$routeParams', '$scope', 'myFactory', function($window, $routeParams, $scope, myFactory) {
	
	$scope.shows =  myFactory.getShows();
	
	if($scope.shows[$routeParams.showId] != undefined){
		
        $scope.show = $scope.shows[$routeParams.showId];
		$scope.show.date = new Date($scope.show.date);
	}
	else{
		$window.location.href = '#!/view1'
	}
	
	$scope.updateShow = function(show) {
		
		show.updating=false;
		
		myFactory.setShows($scope.shows);
	};
	
}]);