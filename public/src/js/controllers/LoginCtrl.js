app.controller('LoginCtrl', ['$scope', '$localStorage', '$location', 'Auth', function ($scope, $localStorage, $location, Auth) {
	
	$scope.error = '';
	
	$scope.login = function() {
		
		console.log($scope.username, $scope.password);
		
		Auth.login({ username: $scope.username, password: $scope.password }, function(user) {
			
			$localStorage.token = user.token;
			$scope.error = '';
			$location.path('/users');
			
		}, function(e) {
			
			if(e.status == 401)
				$scope.error = 'Invalid credentials';
			else
				$scope.error = 'Something went wrong';
				
		});
		
	}
	
}]);