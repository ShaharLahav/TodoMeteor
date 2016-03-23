angular
  .module('Whatsapp')
  .controller('ChatsCtrll', ChatsCtrl);
 
function ChatsCtrl($scope) {
	$scope.helpers({
		lists: function() {
			return Lists.find();
		}
	});
	
	//console.log(Lists);

	$scope.remove = remove;


	function remove(list) {
		Lists.remove({"_id":list._id});
		console.log("homon");
	}
}