angular
  .module('Whatsapp')
  .controller('ChatDetailCtrl', ChatDetailCtrl);


function ChatDetailCtrl($scope, $stateParams) {
  $scope.helpers({
    list: function() {
      return Lists.findOne($stateParams.listId);
    },
    items: function() {
      return ShoppingLists.find({
        'listId': $stateParams.listId
      },{sort: {completed: 1}});
    }
  });


  $scope.AddItem = function(item) {
    var ItemToAdd = {
      name: item,
      listId: $stateParams.listId,
      completed: false
    }
    ShoppingLists.insert(ItemToAdd);
    $scope.item = "";
  }

  $scope.remove =  function remove(item) {
    ShoppingLists.remove({"_id":item._id});
    console.log("homon");
  }

  $scope.toggleCompleted = function(item) {
    ShoppingLists.update({
      _id: item._id
    }, {
      name: item.name,
      listId: item.listId,
      completed: item.completed
    }, {
      upsert: true
    });
  }
}