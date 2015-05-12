app.controller('TaskDetailCtrl', ['$scope', '$routeParams', 'Tasks', function ($scope, $routeParams, Tasks) {
	$scope.task = Tasks.get({ id: $routeParams.id });
}]);