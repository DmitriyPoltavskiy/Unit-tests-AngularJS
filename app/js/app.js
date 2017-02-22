function testCtrl($scope) {
	$scope.title = 'Password';

	$scope.checkPassword = function() {
		if ($scope.password.length > 12) {
			$scope.strength = 'strong';
		}
		else if ($scope.password.length > 8) {
			$scope.strength = 'medium';
		}
		else {
			$scope.strength = 'weak';
		}
	};
}

angular.module('app', [])
	.controller('testCtrl', testCtrl);