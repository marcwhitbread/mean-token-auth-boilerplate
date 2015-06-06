var jwt = require('jsonwebtoken');

var methods = {
	ensure: function(req, res, next) {
	    
	    if(typeof req.headers["authorization"] !== 'undefined') {
		    
	        jwt.verify(req.headers["authorization"], 'secret', function(e, token) {
		        if(e) res.sendStatus(403);
		    	next(); 
	        });
	        
	    } else {
	        res.sendStatus(403);
	    }
	    
	}
}

module.exports = methods;