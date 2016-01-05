myApp.controller('LivingroomController', ['$scope', 'SendRequest', 
function($scope, SendRequest) {
	$scope.ligthstatus = "hello";
	$scope.ligthstatus = SendRequest.controllight('http://192.168.0.102/status');

	$scope.lightOn = function() {
		$scope.ligthstatus = SendRequest.controllight('http://192.168.0.102/gpio/1');
		console.log($scope.ligthstatus);
	};

	$scope.lightOff = function() {
		$scope.ligthstatus = SendRequest.controllight('http://192.168.0.102/gpio/0');
	};

}]);