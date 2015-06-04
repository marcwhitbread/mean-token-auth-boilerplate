var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var User = require('../models/User.js');

/* GET /users listing. */
router.get('/', function(req, res, next) {
	
	User
		.find()
		.exec(function(e, users) {
			if(e) return next(e);
			res.json(users);
		});
	
});

/* GET /users/id */
router.get('/:id', function(req, res, next) {
	
	User.findById(req.params.id, function(e, user) {
		if(e) return next(e);
		res.json(user);
	});
	
});

/* POST /users */
router.post('/', function(req, res, next) {
	
	User.create(req.body, function(e, user) {
		if(e) return next(e);
		res.json(user);
	});
	
});

/* PUT /users/:id */
router.put('/:id', function(req, res, next) {
	
	User.findByIdAndUpdate(req.params.id, req.body, function (e, user) {
		if(e) return next(e);
		res.json(user);
	});

});

/* DELETE /users/:id */
router.delete('/:id', function(req, res, next) {
	
	User.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;