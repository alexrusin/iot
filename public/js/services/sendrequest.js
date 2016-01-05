myApp.factory('SendRequest', ['$http', function($http) {

	return {

		controllight: function(reqAddress) {
			console.log('getting request');

			$http({
				method: 'GET',
				url: reqAddress
			}).
			success(function(data, status, headers, config) {

				if (data.ltstatus === 1) {
					lightstatus = "The light in the livingroom is ON!";
				} else if (data.ltstatus === 0) {
					lightstatus = "The light in the livingroom is OFF!"
				} else {
					lightstatus = "Cannot get status of the light in the livingroom";
				}
				console.log (lightstatus);
				return lightstatus;
			}).
			error(function(data, status, headers, config) {
				$scope.lightstatus = "Oops, an error has occured";
				return lightstatus;
			});

		}

	};

}]);