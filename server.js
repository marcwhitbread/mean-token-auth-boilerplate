//includes
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

//routes
var routes = require('./routes/index');
var tasks = require('./routes/tasks');

//db connection
mongoose.connect('mongodb://localhost/task-manager');

var app = express();

//for req.body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set view engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

//routes
app.use('/', routes);
app.use('/tasks', tasks);

//web server listening
app.listen(8000);

module.exports = app;