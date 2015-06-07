var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var jwt = require('jsonwebtoken');
var User = require('../app/models/User.js');

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(e, user) {
		done(e, user);
	});
});

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password'
}, function(username, password, done) {

	User.findOne({ username: username }, function(e, user) {

		if(e) return done(e);
		
		if(!user) return done(null, false, { message: 'Incorrect username.' });

		user.validPassword(password, function(e, isMatch) {
			
			if(e) return done(e);
			
			if(!isMatch) return done(null, false, { message: 'Incorrect password.' });
			
			user.populate('role', function(e) {
				if(e) return next(e);
				
				//create token
				user.token = jwt.sign(user, 'secret', { expiresInSeconds: 2592000 }); //60*60*24*30 = 30 days
				
				return done(null, user);
			});
			
		});
		
	});

}));