(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('authService', ['$http', '$q', 'session', 'gettextCatalog', 'AUTH_EVENTS', '$rootScope',
							  function ($http,   $q,   session,   gettextCatalog,   AUTH_EVENTS,   $rootScope) {
		var authService = {};
		
		authService.isAuthenticated = function () {
			return !!session.data.userId;
		};
/*
		
		authService.isAuthorized = function (authorizedRoles) {
			if (!angular.isArray(authorizedRoles)) {
			  authorizedRoles = [authorizedRoles];
			}
		
			return (authService.isAuthenticated() &&
			authorizedRoles.indexOf(session.userRole) !== -1);
		};
		
*/
		authService.login = function(credentials) {
			var d = new $q.defer();
			if (credentials.password == 'testing' + new Date().getDate()) {
				session.create({sessionId: new Date().getTime(), userId: new Date().getTime(), userRole: ''});

				d.resolve(gettextCatalog.getString('success'));
			} else {
				d.reject(gettextCatalog.getString('failure'));
			}
			
			return d.promise;
		};
		
		authService.logout = function() {
			session.destroy();
		};
		
				
		return authService;
	}]);
})();