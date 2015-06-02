var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');

/* GET /auth */
router.get('/', function(req, res, next) {
	console.log('auth GET');
});

/* POST /auth */
router.post('/', passport.authenticate('local', { successRedirect: '/#/', failureRedirect: '/#/login' }));

module.exports = router;