.factory('Tasks', ['$resource', function($resource) {
	        
	return $resource('/tasks/:id', null, {
		'update': { method: 'PUT' }
	});
	
}])