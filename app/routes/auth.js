var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');
var authCheck = require('../includes/auth.js');

/* POST /auth/login */
router.post('/login', passport.authenticate('local'), function(req, res) {
	res.json(req.user);
});

/* POST /auth/logout */
router.post('/logout', authCheck.ensure, function(req, res) {
	
	req.user.revokeToken(function(e) {
		if(e) return done(e);
		res.end();
	});

});

module.exports = router;