app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/publishers', {
			templateUrl: '/templates/publishers.html',
			controller: 'PublisherCtrl'
		})
		
		.when('/tasks', {
			templateUrl: '/templates/tasks.html',
			controller: 'TaskCtrl'
		})
	
		.when('/task/:id', {
			templateUrl: '/templates/taskDetails.html',
			controller: 'TaskDetailCtrl'
		})
		
		.otherwise({
        	redirectTo: '/tasks'
      	});
}]);