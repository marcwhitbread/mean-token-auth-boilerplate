var app = angular.module('app', ['ngRoute', 'ngResource']);
app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/tasks.html',
			controller: 'TaskCtrl'
		})
	
		.when('/:id', {
			templateUrl: '/templates/taskDetails.html',
			controller: 'TaskDetailCtrl'
		});
}]);
app.controller('TaskCtrl', ['$scope', 'Tasks', function ($scope, Tasks) {
    
	$scope.tasks = Tasks.query();
	
	$scope.save = function() {
		
		if(!$scope.newTask || $scope.newTask.length < 1) return;
		
		var task = new Tasks({ name: $scope.newTask, completed: false });
	
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
app.controller('TaskDetailCtrl', ['$scope', '$routeParams', 'Tasks', function ($scope, $routeParams, Tasks) {
	$scope.task = Tasks.get({ id: $routeParams.id });
}]);
app.factory('Tasks', ['$resource', function($resource) {
	        
	return $resource('/tasks/:id', null, {
		'update': { method: 'PUT' }
	});
	
}])