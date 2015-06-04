var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	updated_at: { type: Date, default: Date.now }
});

//bcrypt
UserSchema.pre('save', function(next) {
	var user = this;

	if(!user.isModified('password')) return next();

	bcrypt.genSalt(10, function(e, salt) {
		if(e) return next(e);

		bcrypt.hash(user.password, salt, function(e, hash) {
			if(e) return next(e);
			user.password = hash;
			next();
		});
	});
});

//check password validity
UserSchema.methods.validPassword = function(password, callback) {
	
	bcrypt.compare(password, this.password, function(e, isMatch) {
		if(e) return callback(e, null);
		console.log(isMatch);
		return callback(null, isMatch);
	});
	
	return false;
	
}

var User = mongoose.model('User', UserSchema);
module.exports = User;