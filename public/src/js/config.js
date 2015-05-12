app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/templates/tasks.html',
			controller: 'TaskController'
		})
	
		.when('/:id', {
			templateUrl: '/templates/taskDetails.html',
			controller: 'TaskDetailCtrl'
		});
}]);