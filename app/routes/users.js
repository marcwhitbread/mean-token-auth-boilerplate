var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/User.js');
var authCheck = require('../includes/auth.js');

/* GET /users listing. */
router.get('/', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.users.read) {
		res.json({ user_access: false });
		return;
	}
	
	User
		.find()
		.populate('role')
		.exec(function(e, users) {
			if(e) return next(e);
			res.json(users);
		});
	
});

/* GET /users/id */
router.get('/:id', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.users.read) {
		res.json({ user_access: false });
		return;
	}
	
	User.findById(req.params.id, function(e, user) {
		if(e) return next(e);

		user.populate('role', function(e) {
			if(e) return next(e);
			res.json(user);
		});
	});
	
});

/* POST /users */
router.post('/', authCheck.ensure, function(req, res, next) {

	if(!req.user.role.access.users.create) {
		res.json({ user_access: false });
		return;
	}
	
	User.create(req.body, function(e, user) {
		if(e) return next(e);
		
		user.populate('role', function(e) {
			if(e) return next(e);
			res.json(user);
		});
	});
	
});

/* PUT /users/:id */
router.put('/:id', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.users.update) {
		res.json({ user_access: false });
		return;
	}

	User.findByIdAndUpdate(req.params.id, req.body, function(e, user) {
		if(e) return next(e);
		
		user.populate('role', function(e) {
			if(e) return next(e);
			res.json(user);
		});
	});

});

/* DELETE /users/:id */
router.delete('/:id', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.users.delete) {
		res.json({ user_access: false });
		return;
	}	

	User.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;