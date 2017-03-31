angular.module('myApp')
	.factory('myFactory', function(){
		
		function setShows(storedshows){
			localStorage.setItem("shows", JSON.stringify(storedshows));
		}
		
		return{
			setShows: setShows,
			
			getShows : function (){
			var shows = [];
			
			var localItems = JSON.parse(localStorage.getItem("shows"));
	
	        if(localItems != undefined && localItems.length>0) {
		    shows = localItems;
	        }
				
			return shows;
			}
			
		}
		
});