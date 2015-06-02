app.controller('UserCtrl', ['$scope', 'Users', function($scope, Users) {
	
	$scope.users = Users.query();
	
	$scope.signup = function() {
		
		if(!$scope.username || $scope.username.length < 1) return;
		if(!$scope.email || $scope.email.length < 1) return;
		if(!$scope.password || $scope.password.length < 1) return;
		
		var user = new Users({ username: $scope.username, email: $scope.email, password: $scope.password });
		console.log(user);
		user.$save(function() {});
		
	}
	
	$scope.remove = function(index) {
		
		var user = $scope.users[index];
		
		Users.remove({id: user._id}, function() {
			$scope.users.splice(index, 1);
		});
		
	}
	
}]);