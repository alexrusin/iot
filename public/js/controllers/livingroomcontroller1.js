myApp.controller('LivingroomController', ['$scope', '$http', 
function($scope, $http) {
	var reqUrl = 'http://172.251.161.40:8080/';
	$scope.lightstatus = "Cannot get status of the light!";
	$scope.toggle = false;
	$http({
				method: 'GET',
				url: reqUrl +'status'
			}).
			success(function(data, status, headers, config) {

				if (data.ltstatus === 1) {
					$scope.lightstatus = "Turn Light Off";
					$scope.toggle = true;
				} else if (data.ltstatus === 0) {
					$scope.lightstatus = "Turn Light On";
					$scope.toggle = false;
				} else {
					$scope.lightstatus = "Cannot get status of the light!";
				}
				
			}).
			error(function(data, status, headers, config) {
				$scope.lightstatus = "Oops, an error has occured";
				
			});

	$scope.turnSwitch = function() {
		var command;
		if ($scope.toggle){
			command = 'gpio/0';
		}	else {
			command = 'gpio/1'
		}

		$http({
				method: 'GET',
				url: reqUrl + command
			}).
			success(function(data, status, headers, config) {

			if (data.ltstatus === 1) {
				$scope.lightstatus = "Turn Light Off";
				$scope.toggle = true;
			} else if (data.ltstatus === 0) {
				$scope.lightstatus = "Turn Light On";
				$scope.toggle = false;
			} else {
				$scope.lightstatus = "Light status undefined!"
			}
				
			}).
			error(function(data, status, headers, config) {
				$scope.lightstatus = "Oops, an error has occured";
				
			});
	};

	

}]);