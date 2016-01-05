myApp.controller('LivingroomController', ['$scope', '$http', 
function($scope, $http) {
	
	$http({
				method: 'GET',
				url: 'http://192.168.0.102/status'
			}).
			success(function(data, status, headers, config) {

				if (data.ltstatus === 1) {
					$scope.lightstatus = "The light in the livingroom is ON!";
				} else if (data.ltstatus === 0) {
					$scope.lightstatus = "The light in the livingroom is OFF!"
				} else {
					$scope.lightstatus = "Cannot get status of the light in the livingroom";
				}
				
			}).
			error(function(data, status, headers, config) {
				$scope.lightstatus = "Oops, an error has occured";
				
			});

	$scope.lightOn = function() {
		$http({
				method: 'GET',
				url: 'http://192.168.0.102/gpio/1'
			}).
			success(function(data, status, headers, config) {

				if (data.ltstatus === 1) {
					$scope.lightstatus = "The light in the livingroom is ON!";
				} else if (data.ltstatus === 0) {
					$scope.lightstatus = "The light in the livingroom is OFF!"
				} else {
					$scope.lightstatus = "Cannot get status of the light in the livingroom";
				}
				
			}).
			error(function(data, status, headers, config) {
				$scope.lightstatus = "Oops, an error has occured";
				
			});
	};

	$scope.lightOff = function() {
		$http({
				method: 'GET',
				url: 'http://192.168.0.102/gpio/0'
			}).
			success(function(data, status, headers, config) {

				if (data.ltstatus === 1) {
					$scope.lightstatus = "The light in the livingroom is ON!";
				} else if (data.ltstatus === 0) {
					$scope.lightstatus = "The light in the livingroom is OFF!"
				} else {
					$scope.lightstatus = "Cannot get status of the light in the livingroom";
				}
				
			}).
			error(function(data, status, headers, config) {
				$scope.lightstatus = "Oops, an error has occured";
				
			});
	};

}]);