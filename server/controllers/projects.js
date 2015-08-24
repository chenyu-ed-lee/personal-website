var mongoose = require('mongoose');
var Project = mongoose.model('Project');

module.exports = (function() {
	return {
		show: function(req, res){
			Project.find({}, function(error, result) {
				if(error) {
					console.log(error);
				} else {
					res.json(result);
				}
			})			
		}
	}
})();