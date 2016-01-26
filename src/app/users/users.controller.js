(function() {
	'use strict';
	angular
	.module('usersModule')
	.controller('UsersController', UsersController);

	/** ngInject */
	function UsersController($log, $http, $stateParams) {
		var vm = this;
		vm.gitUsers = [];
		vm.myOffset = $stateParams.offset;
		var gitApi = 'https://api.github.com/users';
		GetUsers(vm.myOffset);

		
		function GetUsers(offset) {
			if(offset!==0 && angular.isDefined(offset)) {
				gitApi += '?since=' + (offset - 1);
			}
			$http.get(gitApi)
			.then(function(response) {
				vm.gitUsers = response.data;
			})
			.catch(function(error) {
				$log.error('XHR error in UsersController function:\n' + angular.toJson(error.data, true));
			});
		}

		

	}
})();