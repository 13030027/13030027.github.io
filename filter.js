angular.module('myApp')
	.filter('showWatchNow',['myService', function (myService) {
		
		return function (shows, watchnow) {
			var filtered = [];
			for (var i = 0; i < shows.length; i++) {
				var show = shows[i];
				if(watchnow){
					if(myService.myFunc(show.date)){
						filtered.push(show);
					}
				}
				else{
					filtered.push(show);
				}
			}
			return filtered;
		};
		
}]);