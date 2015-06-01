var mongoose = require('mongoose');

var PublisherSchema = new mongoose.Schema({
	username: String,
	updated_at: { type: Date, default: Date.now }
});

var Publisher = mongoose.model('Publisher', PublisherSchema);
module.exports = Publisher;