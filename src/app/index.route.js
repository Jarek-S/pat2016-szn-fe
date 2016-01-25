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
      templateUrl: 'app/users/users.html',
      controller: 'UsersController',
      controllerAs: 'users'
    })
    .state('home.users.user', {
      url: '/user/{login}',
      templateUrl: 'app/users/user.html',
        /*controller: function($scope) {
          $scope.testUser = {
            'login': 'defunkt',
            'avatar_url':'https://avatars.githubusercontent.com/u/2?v=3'
          };
        }*/
        controller: 'UserController',
        controllerAs: 'user'
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
