(function() {
	'use strict';
	angular
	.module('usersModule')
	.factory('gitHubData', gitHubData);

	/** @ngInject */
	function gitHubData($log, $http) {
		var service = {
			getGitHubData: getGitHubData
		};
		return service;

		function getGitHubData(gitApi) {
			function getDataComplete(response) {
				return response.data;
			}
			function getDataFailed(error) {
				$log.error('Błąd usługi gitData\n' + angular.toJson(error.data, true));
			}
			return $http.get(gitApi)
			.then(getDataComplete)
			.catch(getDataFailed);
		}
	}
}
)();