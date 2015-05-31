var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Publisher = require('../models/Publisher.js');

/* GET /publisher listing. */
router.get('/', function(req, res, next) {
	
	Publisher.find(function (e, publishers) {
		if(e) return next(e);
		res.json(publishers);
	});
	
});

/* GET /publisher/username */
router.get('/:username', function(req, res, next) {
	
	Publisher.findById(req.params.id, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* POST /publisher */
router.post('/', function(req, res, next) {
	
	Publisher.create(req.body, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* PUT /publisher/:id */
router.put('/:id', function(req, res, next) {

	Publisher.findByIdAndUpdate(req.params.id, req.body, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});

});

/* DELETE /publisher/:id */
router.delete('/:id', function(req, res, next) {
	
	Publisher.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;