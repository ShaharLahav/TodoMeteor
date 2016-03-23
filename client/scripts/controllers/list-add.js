angular
	.module('Whatsapp')
	.controller('ListAddCtrl', Ctrl);

function Ctrl($scope, $location) {
//$scope.nameName = "Enter here";

	$scope.CreateList = function(nameName,description) { 		
		var list = {
			name: nameName,
			description: description
		};
		Lists.insert(list);
		 $scope.nameName = '';
		 $scope.description = '';
		 $location.path("#/tabs/Lists");		
	}
}