app.controller('RoleCtrl', ['$scope', 'Roles', function ($scope, Roles) {
    
    $scope.roles = Roles.query();
	
	$scope.save = function() {
		
		if(!$scope.name || $scope.name.length < 1) return;
		
		var role = new Roles({ 
			name: $scope.name, 
			access: {
				users: {
					create: $scope.access_users.create,
					read: $scope.access_users.read,
					update: $scope.access_users.update,
					delete: $scope.access_users.delete
				},
				tasks: {
					create: $scope.access_users.create,
					read: $scope.access_users.read,
					update: $scope.access_users.update,
					delete: $scope.access_users.delete
				},
				publishers: {
					create: $scope.access_users.create,
					read: $scope.access_users.read,
					update: $scope.access_users.update,
					delete: $scope.access_users.delete
				},
				roles: {
					create: $scope.access_users.create,
					read: $scope.access_users.read,
					update: $scope.access_users.update,
					delete: $scope.access_users.delete
				},
			} 
		});
		
		console.log(role);
	
		role.$save(function() {
			$scope.roles.push(role);
			$scope.name = ''; // clear textbox
		});
		
	}
	
	$scope.update = function(index) {
		
		var role = $scope.roles[index];
		console.log(role);
		
		Roles.update({id: role._id}, role);

	}
	
	$scope.remove = function(index) {
		
		var role = $scope.roles[index];
		
		Roles.remove({id: role._id}, function() {
			$scope.roles.splice(index, 1);
		});
		
	}
	
}]);