(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
		userModule.controller('EditProfileController', ['$scope', '$rootScope', 'userService', 'postman', '$state', 'gettextCatalog', 'authService', 'AUTH_EVENTS', 'STATES', 'familyService',
									    		function($scope,   $rootScope,   userService,   postman,   $state,   gettextCatalog,   authService,   AUTH_EVENTS,   STATES,   familyService) {	
			$scope.states = STATES;
			
			$scope.user = {};			
			if ($scope.$parent.userData !== null) {
				$scope.user = angular.copy($scope.$parent.userData);
			} else {
				$rootScope.$on(AUTH_EVENTS.userInfo, function(event, data){					
					$scope.user = angular.copy(data);
				});
			}
			
			function getProfile(userId) {
			}
			
			$scope.save = function(user) {
				familyService.saveUser(user).then(function(result) {
					postman.success('', gettextCatalog.getString('User updated'));					
					
					$rootScope.$broadcast(AUTH_EVENTS.userInfo, user);
					
					$state.go('profile');
				}, function() {
					postman.error('', gettextCatalog.getString('User could not be updated'));
				});	
			};
	}]);
})();