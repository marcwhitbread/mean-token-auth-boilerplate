var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('../app/models/User.js');

passport.serializeUser(function(user, done) {
	done(null, user.id);
});

passport.deserializeUser(function(id, done) {
	User.findById(id, function(err, user) {
		done(err, user);
	});
});

passport.use(new LocalStrategy({
	usernameField: 'username',
	passwordField: 'password'
}, function(username, password, done) {
	
	User.findOne({ username: username }, function(err, user) {
		
		console.log('Finding User...');
		
		if(err)
			return done(err);
		
		if(!user)
			return done(null, false, { message: 'Incorrect username.' });

		if(!user.validPassword(password))
			return done(null, false, { message: 'Incorrect password.' });

		return done(null, user);
		
	});

}));