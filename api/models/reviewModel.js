var mongoose = require('mongoose');

var ReviewSchema = mongoose.Schema({
	address: String,
  reviews: String,
	stars: String
});

var Rev = mongoose.model('Review', ReviewSchema);

module.exports = Rev