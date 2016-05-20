(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('userService', ['$http', '$q',
	 					function($http,   $q) {	
			return {
				isAuthed: function() {
					return true;
				},
				
				login: function(credentials) {
					var d = new $q.defer();
					
					if (credentials.password == 'testing' + new Date().getDate()) {
						d.resolve('success');
					} else {
						d.reject('failure');
					}
					
					return d.promise;
				}
			};
		}
	]);
})();