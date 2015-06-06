app.config(['$routeProvider', '$httpProvider', function ($routeProvider, $httpProvider) {
	
	$httpProvider.interceptors.push('AuthInterceptor');
	
	$routeProvider
		.when('/login', {
			templateUrl: '/templates/login.html',
			controller: 'LoginCtrl'
		})
		
		.when('/users', {
			templateUrl: '/templates/users.html',
			controller: 'UserCtrl'
		})
		
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