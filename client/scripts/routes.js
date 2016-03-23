angular
  .module('Whatsapp')
  .config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('login', {
      url: '/login',

      templateUrl: 'client/templates/favs.html',
      controller: 'favs'


    })
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'client/templates/tabs.html'
    })

  .state('tab.chats', {
      url: '/lists',
      views: {
        'tab-lists': {
          templateUrl: 'client/templates/tab-chats.html',
          controller: 'ChatsCtrll'
        }
      }
    })
    .state('tab.info', {
      url: '/info',
      views: {
        'tab-info': {
          templateUrl: 'client/templates/info.html',
          controller: 'info'
        }
      }
    })
    .state('tab.add-list', {
      url: '/add',
      views: {
        'tab-lists': {
          templateUrl: 'client/templates/list-add.html',
          controller: 'ListAddCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/lists/:listId',
      views: {
        'tab-lists': {
          templateUrl: 'client/templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
}