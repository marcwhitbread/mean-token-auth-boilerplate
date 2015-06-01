app.controller('TaskCtrl', ['$scope', 'Tasks', 'Publishers', function ($scope, Tasks, Publishers) {
    
    $scope.publishers = Publishers.query();
	$scope.tasks = Tasks.query();
	
	$scope.save = function() {
		
		if(!$scope.newTask || $scope.newTask.length < 1) return;
		
		var task = new Tasks({ name: $scope.newTask, publisher: $scope.newPublisher._id, assignee: $scope.newPublisher._id, completed: false });
	
		task.$save(function() {
			$scope.tasks.push(task);
			$scope.newTask = ''; // clear textbox
		});
		
	}
	
	$scope.update = function(index) {
		
		var task = $scope.tasks[index];
		
		Tasks.update({id: task._id}, task);

	}
	
	$scope.remove = function(index) {
		
		var task = $scope.tasks[index];
		
		Tasks.remove({id: task._id}, function() {
			$scope.tasks.splice(index, 1);
		});
		
	}
	
}]);