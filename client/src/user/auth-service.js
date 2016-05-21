(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('authService', ['$http', '$q', 'session', 'gettextCatalog', function ($http, $q, session, gettextCatalog) {
		var authService = {};
		
		authService.isAuthenticated = function () {
			return !!session.userId;
		};
		
		authService.isAuthorized = function (authorizedRoles) {
			if (!angular.isArray(authorizedRoles)) {
			  authorizedRoles = [authorizedRoles];
			}
		
			return (authService.isAuthenticated() &&
			authorizedRoles.indexOf(session.userRole) !== -1);
		};
		
		authService.login = function(credentials) {
			var d = new $q.defer();
			
			if (credentials.password == 'testing' + new Date().getDate()) {
				session.create(new Date().getTime(), new Date().getTime());
				
				d.resolve(gettextCatalog.getString('success'));
			} else {
				d.reject(gettextCatalog.getString('failure'));
			}
			
			return d.promise;
		};
		
		
		return authService;
	}]);
})();