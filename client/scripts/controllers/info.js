angular
	.module('Whatsapp')
	.controller('info', Ctrler);

function Ctrler($scope,$location) {
	$scope.logOut = function () {
		Meteor.logout();
		$location.path('#/login');
	};
}