app.controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
	
	$scope.login = function() {
		
		console.log($scope.username, $scope.password);
		
		Auth.login({ username: $scope.username, password: $scope.password }, function(res) {
			console.log(res);
		}, function(e) {
			console.log(e);
		});
		
	}
	
}]);