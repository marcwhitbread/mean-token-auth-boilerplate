var jwt = require('jsonwebtoken');
var User = require('../models/User.js');

var methods = {
	ensure: function(req, res, next) {
	    
	    if(typeof req.headers["authorization"] !== 'undefined') {
		    
		    //console.log(req, req.baseUrl, req.method);
		    
	        jwt.verify(req.headers["authorization"], 'secret', function(e, user) {
		        if(e) res.sendStatus(403);
		        
		        //console.log('ensure', user.role.access[req.baseUrl.split('/')[1]]);
		        
		        //check user role access
		        if(!user.role.access[req.baseUrl.split('/')[1]])
		        	res.sendStatus(403);
		        
		    	next(); 
	        });
	        
	    } else {
	        res.sendStatus(403);
	    }
	    
	}
}

module.exports = methods;