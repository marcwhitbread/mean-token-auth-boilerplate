app.controller('MainCtrl', ['$scope', '$localStorage', '$location', function ($scope, $localStorage, $location) {
	
	//console.log($localStorage.token);
	
	$scope.logout = function() {
		delete $localStorage.token;
		$location.path('/login');
	}
	
}]);