(function() {
	'use strict';
	angular
	.module('usersModule')
	.controller('UsersController', UsersController);

	/** ngInject */
	function UsersController($log, $stateParams, gitHubData) {
		var vm = this;
		vm.gitUsers = [];
		var myOffset = $stateParams.offset;
		var gitApi = 'https://api.github.com/users';
		
		activate(myOffset);

		function activate(offset) {
			return GetUsers(offset).then(function() {
				$log.info('Activated Users View');
			});
		}

		function GetUsers(offset) {
			if(offset!==0 && angular.isDefined(offset)) {
				gitApi += '?since=' + (offset - 1);
			}
			return gitHubData.getGitHubData(gitApi).then(function(data) {
				vm.gitUsers = data;
				return vm.gitUsers;
			});
		}
	}
})();