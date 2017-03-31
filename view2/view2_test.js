'use strict';

describe('myApp.view2 module', function() {

  beforeEach(module('myApp.view2'));

  describe('add show controller', function(){

    it('should define controller', inject(function($controller) {
      var $scope = {};
	  var myFactory = {
		  getShows: function() {}
	  };
	  
      var addshowCtrl = $controller('AddShowCtrl', {$scope: $scope, myFactory: myFactory});
	  
      expect(addshowCtrl).toBeDefined();
	  
    }));
	
	it('should set default name to show name', inject(function($controller) {
      var $scope = {};
	  var myFactory = {
		  getShows: function() {}
	  };
	  
      var addshowCtrl = $controller('AddShowCtrl', {$scope: $scope, myFactory: myFactory});
	  
      expect($scope.showname).toEqual("Show name");
	  
    }));
	
	it('should add a show', inject(function($controller) {
      var $scope = {};
	  var myFactory = {
		  getShows: function() {},
		  setShows: function() {}
	  };
	  
      var addshowCtrl = $controller('AddShowCtrl', {$scope: $scope, myFactory: myFactory});
	  
	  $scope.shows = [];
	  
	  $scope.showname = "Test";
	  $scope.showdate = new Date();
	  $scope.showseason = 1;
	  $scope.showepisode = 1;
	  
	  $scope.addShow();
	  
	  expect($scope.shows.length).toEqual(1);
	  
	  expect($scope.counter).toEqual(1);
	  
    }));

  });
});