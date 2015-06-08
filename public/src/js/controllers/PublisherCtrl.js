app.controller('PublisherCtrl', ['$scope', 'Publishers', function ($scope, Publishers) {
    
    $scope.publishers = [];
    
	Publishers.query(function(res) {
		$scope.publishers = res;
	}, function(e) {
		console.log(e);
	});
	
	$scope.save = function() {
	
		if(!$scope.newPublisher || $scope.newPublisher.length < 1) return;
		
		var publisher = new Publishers({ username: $scope.newPublisher });
	
		publisher.$save(function() {
			$scope.publishers.push(publisher);
			$scope.newPublisher = ''; // clear textbox
		});
		
	}
	
	$scope.update = function(index) {
		
		var publisher = $scope.publishers[index];
		
		Publishers.update({id: publisher._id}, publisher);

	}
	
	$scope.remove = function(index) {
		
		var publisher = $scope.publishers[index];
		
		Publishers.remove({id: publisher._id}, function() {
			$scope.publishers.splice(index, 1);
		});
		
	}
	
}]);