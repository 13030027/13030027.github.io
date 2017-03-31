angular.module('myApp')
	.service('myService', function(){
		
		var currentdate = new Date();
		
		this.myFunc = function(date){
		var showdate = new Date(date);
        if (currentdate.setHours(0,0,0,0) >= showdate.setHours(0,0,0,0)) {
			return true;
		}
		else{
			return false;
		}
		}
		
});