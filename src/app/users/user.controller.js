(function() {
	'use strict';
	angular
	.module('usersModule')
	.controller('UserController', UserController);

	/** ngInject */
	function UserController($log, $http, login) {
		var vm = this;
		vm.gitUser = [];		
		var gitUserApi = 'https://api.github.com/users/' + login;
		GetUser();

		function GetUser() {
			$http.get(gitUserApi)
		.then(function(response) {
			vm.gitUser = response.data;
			$log.info(angular.toJson(vm.gitUser.data, 3));
		})
		.catch(function(error) {
			$log.error('XHR error in UserController function:\n' + angular.toJson(error.data, true));
		});
		}
	}
})();