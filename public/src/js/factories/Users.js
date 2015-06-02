app.factory('Users', ['$resource', function($resource) {
	        
	return $resource('/users/:id', null, {
		'update': { method: 'PUT' }
	});
	
}])