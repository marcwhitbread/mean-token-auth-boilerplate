var mongoose = require('mongoose');
Schema = mongoose.Schema;

var TaskSchema = new mongoose.Schema({
	name: String,
	completed: Boolean,
	note: String,
	updated_at: { type: Date, default: Date.now },
	publisher: { type: Schema.Types.ObjectId, ref: 'Publisher' },
	assignee: { type: Schema.Types.ObjectId, ref: 'Publisher' }
});

module.exports = mongoose.model('Task', TaskSchema);;