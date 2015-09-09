myApp.controller('appController', function($scope, $routeParams, appFactory) {
	$scope.projects = [];
	showProjects();

	function showProjects() {
		appFactory.getProjects(function(output) {
			$scope.projects = output
		})
	}
})