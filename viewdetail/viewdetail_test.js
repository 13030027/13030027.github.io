'use strict';

describe('myApp.viewdetail module', function() {

  beforeEach(module('myApp.viewdetail'));

  describe('show detail controller', function(){

    it('should define controller', inject(function($controller) {
      var $scope = {};
	  var $routeParams = {
		  showId: 0
	  };
	  var $window = {};
	  var myFactory = {
		  getShows: function() {
			  var shows = [{
               name: "Test",
			   date: new Date(),
			   season: 1,
			   episode: 1
              }];
			  return shows;
		  }
	  };
	  
      var showdetailCtrl = $controller('ShowDetailCtrl', {$window : $window, $routeParams : $routeParams, $scope: $scope, myFactory: myFactory});
	  
      expect(showdetailCtrl).toBeDefined();
	  
    }));
	
	it('should get the right show using the routeparams', inject(function($controller) {
      var $scope = {};
	  var $routeParams = {
		  showId: 0
	  };
	  var $window = {};
	  var myFactory = {
		  getShows: function() {
			  var shows = [{
               name: "Test",
			   date: new Date(),
			   season: 1,
			   episode: 1
              },
			  {
			   name: "Test2",
			   date: new Date(),
			   season: 1,
			   episode: 1
			  }];
			  return shows;
		  }
	  };
	  
      var showdetailCtrl = $controller('ShowDetailCtrl', {$window : $window, $routeParams : $routeParams, $scope: $scope, myFactory: myFactory});
	  
      expect($scope.show.name).toEqual("Test");
	  
    }));

  });
});