var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/livingroom', {
			templateUrl: 'views/livingroom.html',
			controller: 'LivingroomController'
		}).
		when('/bedroom', {
			templateUrl: 'views/bedroom.html',
			controller: 'BedroomController'
		}).
		
		otherwise({
			redirectTo: '/chooseroom.html',
			templateUrl: 'views/chooseroom.html'
		});
}]);