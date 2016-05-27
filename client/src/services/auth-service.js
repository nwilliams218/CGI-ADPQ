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
		
		authService.getUserData = function() {
			var d = new $q.defer();

			//dummy branching until working GET
			if (1==1) {	
				var userData = {
					id: 1,
					firstName: 'Virginia',
					lastName: 'Woolf',
					profilePicture: 'https://dl.dropboxusercontent.com/s/3o5ahnqhnf17820/u311.png',
					address1: '1444 S. Alameda St.',
					address2: '',
					city: 'Los Angeles',
					state: 'CA',
					zip: '90021',
					phone: '3049339016',
					cell: '5037575467',
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