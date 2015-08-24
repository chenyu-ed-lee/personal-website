myApp.controller('appController', function($scope, $routeParams, appFactory) {
	$scope.projects = [];
	showProjects();

	function showProjects() {
		appFactory.getEvents(function(output) {
			$scope.projects = output
		})
	}
})