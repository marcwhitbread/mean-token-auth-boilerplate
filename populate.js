//includes
var express = require('express');
var app = express();
var mongoose = require('mongoose');

//db connection
mongoose.connect('mongodb://localhost/mean-token-auth-boilerplate');

//web server listening
app.listen(8000);

//db schemas
var User = require('./app/models/User.js');
var Role = require('./app/models/Role.js');

//default admin role
var adminRole = {
	name: 'Admin',
	access: {
		users: { 
			create: true,
			read: true,
			update: true,
			delete: true
		},
		tasks: { 
			create: true,
			read: true,
			update: true,
			delete: true
		},
		publishers: { 
			create: true,
			read: true,
			update: true,
			delete: true
		},
		roles: { 
			create: true,
			read: true,
			update: true,
			delete: true
		}
	}
}

//create role
Role.create(adminRole, function (e, role) {
	if(e) console.log(e);
	
	adminRole = role;
	
	console.log(role);
	
	//default admin user
	var adminUser = {
		username: 'admin',
		email: 'admin@site.com',
		password: 'admin',
		token: '',
		role: adminRole._id
	}
	
	//create user
	User.create(adminUser, function(e, user) {
		if(e) console.log(e);
		
		adminUser = user;
		console.log(user);
	});
});

