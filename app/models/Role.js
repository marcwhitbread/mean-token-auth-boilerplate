var mongoose = require('mongoose');
Schema = mongoose.Schema;

var RoleSchema = new mongoose.Schema({
	name: String,
	access: {
		users: { type: Boolean, default: false },
		tasks: { type: Boolean, default: false },
		publishers: { type: Boolean, default: false },
		roles: { type: Boolean, default: false },
	},
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Role', RoleSchema);