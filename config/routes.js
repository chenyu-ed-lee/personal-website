var projects = require('./../server/controllers/projects.js')

module.exports = function(app) {
	app.get('/projects', function(req, res) {
		projects.show(req, res);
	})
}