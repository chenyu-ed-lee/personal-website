myApp.factory('appFactory', function($http) {
	var projects = [];
	var factory = {};

	factory.getProjects = function(callback) {
		$http.get('/projects').success(function(output) {
			projects = output;
			callback(projects);
		})
	}

	return factory;
})