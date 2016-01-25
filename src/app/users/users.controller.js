(function() {
	'use strict';
	angular
	.module('usersModule')
	.controller('UsersController', UsersController);

	/** ngInject */
	function UsersController($log, $http) {
		var vm = this;
		vm.gitUsers = [];
		vm.offset = 0;
		var gitApi = 'https://api.github.com/users';
		GetUsers(vm.offset);

		function GetUsers(offset) {
			if(offset!==0) {
			gitApi += '?since=' + (offset - 1);
			$log.info('button clicked');			 
		}
			$http.get(gitApi)
		.then(function(response) {
			vm.gitUsers = response.data;
			$log.info(vm.gitUsers[2]);
		})
		.catch(function(error) {
			$log.error('XHR error in UsersController function:\n' + angular.toJson(error.data, true));
		});
		}
			
		

	}
})();