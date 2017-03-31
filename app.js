'use strict';

angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.viewdetail'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
	
  $locationProvider.hashPrefix('!');
  
  $routeProvider.
        when('/view1', {
          templateUrl: 'view1/view1.html',
          controller: 'ViewShowsCtrl'
        }).
		when('/view2', {
          templateUrl: 'view2/view2.html',
          controller: 'AddShowCtrl'
        }).
        when('/viewdetail/:showId', {
          templateUrl: 'viewdetail/viewdetail.html',
		  controller: 'ShowDetailCtrl'
        }).
        otherwise({redirectTo: '/view1'});

}]);
