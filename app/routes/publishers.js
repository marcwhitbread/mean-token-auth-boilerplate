var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Publisher = require('../models/Publisher.js');
var authCheck = require('../includes/auth.js');

/* GET /publisher listing. */
router.get('/', authCheck.ensure, function(req, res, next) {
	
	//if(!req.user.role.access[req.baseUrl.split('/')[1]])
		//res.json({ access_error: true });
	
	Publisher.find(function (e, publishers) {
		if(e) return next(e);
		res.json(publishers);
	});
	
});

/* GET /publisher/username */
router.get('/:id', authCheck.ensure, function(req, res, next) {
	
	Publisher.findById(req.params.id, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* POST /publisher */
router.post('/', authCheck.ensure, function(req, res, next) {
	
	Publisher.create(req.body, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* PUT /publisher/:id */
router.put('/:id', authCheck.ensure, function(req, res, next) {

	Publisher.findByIdAndUpdate(req.params.id, req.body, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});

});

/* DELETE /publisher/:id */
router.delete('/:id', authCheck.ensure, function(req, res, next) {
	
	Publisher.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;