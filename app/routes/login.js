var passport = require('passport');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET /publisher listing. */
router.post('/', function(req, res, next) {
	
	passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });
	
});