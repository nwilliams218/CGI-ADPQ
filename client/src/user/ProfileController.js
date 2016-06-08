(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
		userModule.controller('ProfileController', ['$scope', '$rootScope', 'userService', 'postman', '$state', 'AUTH_EVENTS', 'authService', 'familyService',
									    	function($scope,   $rootScope,   userService,   postman,   $state,   AUTH_EVENTS,   authService,   familyService) {	
			$scope.user = {};
						
			$scope.family = [];
			$scope.getFamily = function(userId) {
				familyService.getFamily(userId).then(function(family) {
					$scope.family = family;
				});
			};
			
			
			$rootScope.$on(AUTH_EVENTS.logoutSuccess, function() {
				$scope.user = {};
			});
			
			familyService.getUser(authService.getUserId()).then(function(data) {
				$scope.user = data;
				$scope.getFamily($scope.user.id);
			});
	}]);
})();