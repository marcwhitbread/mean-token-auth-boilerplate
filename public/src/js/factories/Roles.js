app.factory('Roles', ['$resource', function($resource) {
	        
	return $resource('/roles/:id', null, {
		'update': { method: 'PUT' }
	});
	
}])