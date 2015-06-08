app.factory('AuthInterceptor', ['$q', '$location', '$localStorage', function($q, $location, $localStorage) {

	return {
        request: function(config) {
	        
            config.headers = config.headers || {};
            
            if($localStorage.token)
                config.headers['x-access-token'] = $localStorage.token;

            return config;
            
        },
        responseError: function(res) {

            if(res.status === 401 || res.status === 403)
                $location.path('/login');
			
            return $q.reject(res);
            
        }
    }
	
}]);