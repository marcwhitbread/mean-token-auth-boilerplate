app.controller('MainCtrl', ['$scope', '$localStorage', '$location', 'Auth', function ($scope, $localStorage, $location, Auth) {
	
	//console.log($localStorage.token);
	
	$scope.logout = function() {
		
		Auth.logout.go({}, function(user) {
			delete $localStorage.token;
			$location.path('/login');
		});
		
	}
	
}]);