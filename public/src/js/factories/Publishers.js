app.factory('Publishers', ['$resource', function($resource) {
	        
	return $resource('/publishers/:id', null, {
		'update': { method: 'PUT' }
	});
	
}])