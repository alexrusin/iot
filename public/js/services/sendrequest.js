myApp.factory('SendRequest', ['$http', function($http) {

	return {

		controllight: function(reqAddress) {
			$http({
				method: 'GET',
				url: reqAddress
			}).
			success(function(data, status, headers, config) {

				return data.ltstatus;
			}).
			error(function(data, status, headers, config) {
				var lightstatus = "Oops, an error has occured";
				return lightstatus;
			});

		}

	};

}]);