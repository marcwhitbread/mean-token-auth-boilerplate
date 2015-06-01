var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Task = require('../models/Task.js');

/* GET /tasks listing. */
router.get('/', function(req, res, next) {
	
	Task
		.find()
		.populate('publisher assignee')
		.exec(function(e, tasks) {
			if(e) return next(e);
			res.json(tasks);
		});
	
});

/* GET /tasks/id */
router.get('/:id', function(req, res, next) {
	
	Task.findById(req.params.id, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* POST /tasks */
router.post('/', function(req, res, next) {
	
	Task.create(req.body, function (e, task) {
		if(e) return next(e);
		
		task.populate('publisher assignee', function(e) {
			if(e) return next(e);
			res.json(task);
		});
	});
	
});

/* PUT /tasks/:id */
router.put('/:id', function(req, res, next) {
	
	Task.findByIdAndUpdate(req.params.id, req.body, function (e, task) {
		if(e) return next(e);
		
		task.populate('publisher assignee', function(e) {
			if(e) return next(e);
			res.json(task);
		});
	});

});

/* DELETE /tasks/:id */
router.delete('/:id', function(req, res, next) {
	
	Task.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;