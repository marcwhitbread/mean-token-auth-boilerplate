var mongoose = require('mongoose');

var PublisherSchema = new mongoose.Schema({
	username: String,
	updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Publisher', PublisherSchema);