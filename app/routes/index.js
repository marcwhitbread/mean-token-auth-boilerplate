var express = require('express');
var router = express.Router();

router.use(function(req, res, next) {
	console.log(req.method, req.url);
	next();
});

router.use(function(req, res) {
	res.status(404).render('404', { title: '404: File Not Found' });
	console.log(404, 'File Not Found');
});

router.use(function(e, req, res, next) {
	res.status(500).render('500', { title: '500: Internal Server Error', error: e });
	console.log(500, 'Internal Server Error');
});

module.exports = router;