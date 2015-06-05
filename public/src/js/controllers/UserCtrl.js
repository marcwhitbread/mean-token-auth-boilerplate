app.controller('UserCtrl', ['$scope', 'Users', function($scope, Users) {
	
	$scope.users = Users.query();
	
	$scope.signup = function() {
		
		if(!$scope.username || $scope.username.length < 1) return;
		if(!$scope.email || $scope.email.length < 1) return;
		if(!$scope.password || $scope.password.length < 1) return;
		
		var user = new Users({ username: $scope.username, email: $scope.email, password: $scope.password });

		user.$save(function() {
			$scope.users.push(user);
			$scope.username = '';
			$scope.email = '';
			$scope.password = '';
			
			$localStorage.token = user.token;
		});
		
	}
	
	$scope.update = function(index) {
		
		var user = $scope.users[index];
		
		Users.update({id: user._id}, user);

	}
	
	$scope.remove = function(index) {
		
		var user = $scope.users[index];
		
		Users.remove({id: user._id}, function() {
			$scope.users.splice(index, 1);
		});
		
	}
	
}]);