var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/User.js');
var authCheck = require('../includes/auth.js');

/* GET /users listing. */
router.get('/', authCheck.ensure, function(req, res, next) {
	
	User
		.find()
		.exec(function(e, users) {
			if(e) return next(e);
			res.json(users);
		});
	
});

/* GET /users/id */
router.get('/:id', authCheck.ensure, function(req, res, next) {
	
	User.findById(req.params.id, function (e, user) {
		if(e) return next(e);
		res.json(user);
	});
	
});

/* POST /users */
router.post('/', authCheck.ensure, function(req, res, next) {

	req.body.token = jwt.sign(req.body, 'secret', { expiresInSeconds: 2592000 }); //60*60*24*30 = 30 days
	
	User.create(req.body, function (e, user) {
		if(e) return next(e);
		res.json(user);
	});
	
});

/* PUT /users/:id */
router.put('/:id', authCheck.ensure, function(req, res, next) {
	
	User.findByIdAndUpdate(req.params.id, req.body, function (e, user) {
		if(e) return next(e);
		res.json(user);
	});

});

/* DELETE /users/:id */
router.delete('/:id', authCheck.ensure, function(req, res, next) {
	
	User.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;