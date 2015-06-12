var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
	username: { type: String, required: true, unique: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	token: { type: String, default: '' },
	updated_at: { type: Date, default: Date.now },
	role: { type: Schema.Types.ObjectId, ref: 'Role', required: true }
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
		return callback(null, isMatch);
	});
	
	return false;
	
}

//generate token
UserSchema.methods.generateToken = function(callback) {
	
	var user = this;
	
	user.revokeToken(function(e) {
		if(e) return callback(e);
		
		user.token = jwt.sign(user, 'secret', { expiresInSeconds: 2592000 }); //60*60*24*30 = 30 days
		
		return user.save(function(e) {
			return callback(e, user);
		});
	});
	
}

//revoke token
UserSchema.methods.revokeToken = function(callback) {
	
	var user = this;
	
	user.token = '';
	
	return user.save(function(e) {
		return callback(e);
	});
	
}

module.exports = mongoose.model('User', UserSchema);