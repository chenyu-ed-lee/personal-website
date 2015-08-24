var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = new mongoose.Schema({
	url: String,
	name: String,
	description: String,
	image: String
})

mongoose.model('Project', ProjectSchema);