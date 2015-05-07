var express = require('express');
var app = express();
var mongoose = require('mongoose');
var tasks = require('./routes/tasks');

mongoose.connect('mongodb://localhost/task-manager', function(e) {
    
    if(e)
        console.log('connection error', e);
    else
        console.log('connection successful');
    
});

app.use('/tasks', tasks);

app.use(function (req, res, next) {
	var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
	console.log('Client IP:', ip);
	next();
});

app.use('/tasks/:id', function (req, res, next) {
	console.log('Request Type:', req.method);
	next();
});

app.get('/tasks/:id', function (req, res, next) {
	Todo.findById(req.params.id, function(e, todo){
		if(e) res.send(e);
		res.json(todo);
	});
});