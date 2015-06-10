var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Task = require('../models/Task.js');
var authCheck = require('../includes/auth.js');

/* GET /tasks listing. */
router.get('/', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.tasks.read) {
		res.json({ user_access: false });
		return;
	}
	
	Task
		.find()
		.populate('publisher assignee')
		.exec(function(e, tasks) {
			if(e) return next(e);
			res.json(tasks);
		});
	
});

/* GET /tasks/id */
router.get('/:id', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.tasks.read) {
		res.json({ user_access: false });
		return;
	}

	Task.findById(req.params.id, function (e, post) {
		if(e) return next(e);
		res.json(post);
	});
	
});

/* POST /tasks */
router.post('/', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.tasks.create) {
		res.json({ user_access: false });
		return;
	}

	Task.create(req.body, function (e, task) {
		if(e) return next(e);
		
		task.populate('publisher assignee', function(e) {
			if(e) return next(e);
			res.json(task);
		});
	});
	
});

/* PUT /tasks/:id */
router.put('/:id', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.tasks.update) {
		res.json({ user_access: false });
		return;
	}

	Task.findByIdAndUpdate(req.params.id, req.body, function (e, task) {
		if(e) return next(e);
		
		task.populate('publisher assignee', function(e) {
			if(e) return next(e);
			res.json(task);
		});
	});

});

/* DELETE /tasks/:id */
router.delete('/:id', authCheck.ensure, function(req, res, next) {
	
	if(!req.user.role.access.tasks.delete) {
		res.json({ user_access: false });
		return;
	}

	Task.findByIdAndRemove(req.params.id, req.body, function(e, post) {
		if(e) return next(e);
		res.json(post);
	});
  
});

module.exports = router;