angular
	.module('Whatsapp')
	.controller('favs', Ctrler);

function Ctrler($scope, $location) {
	Tracker.autorun(function() {
		if (Meteor.userId()) {
			console.log("LoggedIn");
			// $location.path('#/tab/lists');
			// Router.go('#/tab/lists');
		}
		else
			console.log("LoggedOut");
	});
}