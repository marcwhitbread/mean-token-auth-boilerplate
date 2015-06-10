var jwt = require('jsonwebtoken');
var User = require('../models/User.js');

var methods = {
	ensure: function(req, res, next) {

	    if(typeof req.headers["x-access-token"] !== 'undefined') {
		    
		    //verify token
	        jwt.verify(req.headers["x-access-token"], 'secret', function(e, user) {
		        
		        //check error
		        if(e) {
			        res.sendStatus(401);
			        return;
			    } else {
			    
				    //get user and role for token
				    User
				    	.findOne({ token: req.headers["x-access-token"] })
				    	.populate('role')
						.exec(function(e, user) {
							if(e) return next(e);
							
							//no token match found for user
							if(!user) { 
								res.sendStatus(401);
								return;
							}
							
							//success
							else {
								req.user = user;
								next();
							}
						});
							
				}
			    	
	        });
	        
	    } else {
	        res.sendStatus(403);
	    }
	    
	}
}

module.exports = methods;