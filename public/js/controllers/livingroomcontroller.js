myApp.controller('LivingroomController', ['$scope', 'SendRequest', 
function($scope, SendRequest) {
	var url = 'http://172.251.161.40:8080/';
	$scope.lightstatus = "Cannot get status of the light!";
	$scope.toggle = false;
	
	SendRequest.controllight(url + 'status', function(data){
		console.log (data);
		if (data === 1) {
				$scope.lightstatus = "Turn Light Off";
				$scope.toggle = true;
			} else if (data === 0) {
				$scope.lightstatus = "Turn Light On";
				$scope.toggle = false;
			} else {
				$scope.lightstatus = "Cannot get status of the light!";
				$scope.toggle = true;
			}
		
	});


	$scope.turnSwitch = function() {
		var command;
		if ($scope.toggle){
			command = 'gpio/0';
		}	else {
			command = 'gpio/1'
		}
		SendRequest.controllight(url + command, function(data){
		if (data === 1) {
				$scope.lightstatus = "Turn Light Off";
				$scope.toggle = true;
			} else if (data === 0) {
				$scope.lightstatus = "Turn Light On";
				$scope.toggle = false;
			}
	});
	};

	
}]);