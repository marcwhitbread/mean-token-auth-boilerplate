app.factory('Auth', ['$resource', function($resource) {
	        
	return {
		login: $resource('/auth/login/', null, {
			'go': { method: 'POST' }
		}),
		logout: $resource('/auth/logout/', null, {
			'go': { method: 'POST' }
		})
	}
	
}])