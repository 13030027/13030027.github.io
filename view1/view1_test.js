'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view shows controller', function(){

    it('should define controller', inject(function($controller) {
      var $scope = {};
	  var myFactory = {
		  getShows: function() {
			  var shows = [];
			  return shows;
		  }
	  };
	  
      var viewshowsCtrl = $controller('ViewShowsCtrl', {$scope: $scope, myFactory: myFactory});
	  
      expect(viewshowsCtrl).toBeDefined();
	  
    }));
	
	it('should set filter off by default', inject(function($controller) {
      var $scope = {};
	  var myFactory = {
		  getShows: function() {
			  var shows = [];
			  return shows;
		  }
	  };
	  
      var viewshowsCtrl = $controller('ViewShowsCtrl', {$scope: $scope, myFactory: myFactory});
	  
      expect($scope.watchnow).toEqual(false);
	  
    }));
	
	it('should delete a show', inject(function($controller) {
      var $scope = {};
	  var myFactory = {
		  getShows: function() {
			  var shows = [{
               name: "Test",
			   date: new Date(),
			   season: 1,
			   episode: 1
              }];
			  return shows;
		  },
		  setShows: function() {}
	  };
	  
      var viewshowsCtrl = $controller('ViewShowsCtrl', {$scope: $scope, myFactory: myFactory});
      
      expect($scope.shows.length).toEqual(1);
	  
	  $scope.deleteShow($scope.shows[0]);
	  
	  expect($scope.shows.length).toEqual(0);
	  
    }));

  });
});