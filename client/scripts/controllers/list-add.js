angular
	.module('Whatsapp')
	.controller('ListAddCtrl', Ctrl);

function Ctrl($scope, $location) {
	//$scope.nameName = "Enter here";

	$scope.CreateList = function(nameName, description) {
		var list = {
			name: nameName,
			description: description
		};
		$scope.nameName = '';
		$scope.description = '';
		Lists.insert(list);
		$location.path("#/tabs/Lists");
	}
}