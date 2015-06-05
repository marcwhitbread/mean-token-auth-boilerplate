app.factory('Auth', ['$resource', function($resource) {
	        
	return $resource('/auth/:id', null, {
		'login': { method: 'POST' }
	});
	
}])