var jwt = require('jsonwebtoken');
var User = require('../models/User.js');

var methods = {
	ensure: function(req, res, next) {
	    
	    if(typeof req.headers["x-access-token"] !== 'undefined') {
		    
	        jwt.verify(req.headers["x-access-token"], 'secret', function(e, user) {
		        
		        //check error
		        if(e) {
			        res.sendStatus(401).end();
			        return;
			    }
		        
		        //check user role access
		        if(!user.role.access[req.baseUrl.split('/')[1]]) {
			        res.sendStatus(401).end();
			        return;
			    }
			    
		    	next();
			    	
	        });
	        
	    } else {
	        res.sendStatus(403).end();
	    }
	    
	}
}

module.exports = methods;