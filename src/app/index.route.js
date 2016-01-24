(function() {
  'use strict';

  angular
    .module('pat2016SznFe')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('home.users', {
      url: 'users',
        //templateUrl: 'app/users/users.html',
        //controller: 'UsersController',
        //controllerAs: 'users',
        views: {
          '': {
            templateUrl: 'app/users/users.html',
            controller: 'UsersController',
            controllerAs: 'users'
          },
          'user': {
            templateUrl: 'app/users/user.html',
            controller: 'UserController',
            controllerAs: 'user'
          }
        }
      })
      .state('home.about', {
        url: 'about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'aboutMe'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
