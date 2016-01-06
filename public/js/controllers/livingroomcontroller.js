myApp.controller('LivingroomController', ['$scope', 'SendRequest', 
function($scope, SendRequest) {
	$scope.ligthstatus = "hello";
	$scope.ligthstatus = SendRequest.controllight('http://172.251.161.40:8080/status');

	$scope.lightOn = function() {
		$scope.ligthstatus = SendRequest.controllight('http://172.251.161.40:8080/gpio/1');
		console.log($scope.ligthstatus);
	};

	$scope.lightOff = function() {
		$scope.ligthstatus = SendRequest.controllight('http://172.251.161.40:8080/gpio/0');
	};

}]);