var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

/*router.use(function(req, res, next) {
	
	if(req.method == 'POST' && req.url == '/login') {

		if(req.body.rememberme)
			req.session.cookie.maxAge = 2592000000; // 30*24*60*60*1000 Rememeber 'me' for 30 days
		else
			req.session.cookie.expires = false;
			
	}
	
	next();	
	
});*/

/*router.use(function(req, res) {
	res.status(404).render('404', { title: '404: File Not Found' });
});

router.use(function(e, req, res, next) {
	res.status(500).render('500', { title: '500: Internal Server Error', error: e });
});*/

module.exports = router;