var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Todo = require('../models/Task.js');

/* GET /tasks listing. */
router.get('/', function(req, res, next) {
  Todo.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* GET /tasks/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* POST /tasks */
router.post('/', function(req, res, next) {
  Todo.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /tasks/:id */
router.put('/:id', function(req, res, next) {
  Todo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /tasks/:id */
router.delete('/:id', function(req, res, next) {
	
	Todo.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(err) return next(e);
		res.json(post);
	});
  
});

module.exports = router;