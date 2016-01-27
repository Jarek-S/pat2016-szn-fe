(function() {
	'use strict';
	angular
	.module('usersModule')
	.controller('UserController', UserController);

	/** ngInject */
	function UserController($log, $stateParams, gitHubData) {
		var vm = this;
		vm.gitUser = [];
		var login = $stateParams.login;		
		var gitUserApi = 'https://api.github.com/users/' + login;
		
		activate(gitUserApi);

		function activate(gitUserApi) {
			return GetUser(gitUserApi).then(function() {
				$log.info('Activated User details View');
			});
		}

		function GetUser(gitUserApi) {
			return gitHubData.getGitHubData(gitUserApi).then(function(data) {
				vm.gitUser = data;
				return vm.gitUser;
			});
		}		
	}
})();