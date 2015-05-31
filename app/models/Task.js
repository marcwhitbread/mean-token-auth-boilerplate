var mongoose = require('mongoose');

var TaskSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	note: String,
	updated_at: { type: Date, default: Date.now },
	publisher: 0,
	assignee: 0
});

module.exports = mongoose.model('Task', TaskSchema);