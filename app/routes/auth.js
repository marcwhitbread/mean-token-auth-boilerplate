var express = require('express');
var router = express.Router();
var passport = require('passport');
var mongoose = require('mongoose');

/* POST /auth */
router.post('/', passport.authenticate('local'), function(req, res) {
	res.json(req.user);
});

module.exports = router;