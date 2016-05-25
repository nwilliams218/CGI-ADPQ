(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('authService', ['$http', '$q', 'session', 'gettextCatalog', 'AUTH_EVENTS', '$rootScope',
							  function ($http,   $q,   session,   gettextCatalog,   AUTH_EVENTS,   $rootScope) {
		var authService = {};
		
		authService.isAuthenticated = function () {
			return !!session.userId;
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
				session.create(new Date().getTime(), new Date().getTime());

				d.resolve(gettextCatalog.getString('success'));
			} else {
				d.reject(gettextCatalog.getString('failure'));
			}
			
			return d.promise;
		};
		
		authService.getUserData = function() {
			var d = new $q.defer();

			//dummy branching until working GET
			if (1==1) {	
				var userData = {
					firstName: 'Virginia',
					lastName: 'Woolf',
					profilePicture: 'http://d26uhratvi024l.cloudfront.net/gsc/S8VE9S/d0/6b/a5/d06ba5387dff4d6f82aed87c941ebcfa/images/home_1/u277.png?token=30ebae8fe5edebfcbb4b500e43bdb558',
					address1: '1444 S. Alameda St.',
					address2: '',
					city: 'Los Angeles',
					state: 'CA',
					zip: '90021',
					email: 'virginiawoolf@lighthouse.com',
					gender: 'Female',
					dob: new Date (1882, 1, 25),
				};
				
				d.resolve(userData);
			} else {
				d.reject(AUTH_EVENTS.notAuthorized);
			}
			
			$rootScope.$broadcast(AUTH_EVENTS.userInfo, userData);
			return d.promise;
		};
		
		
		return authService;
	}]);
})();