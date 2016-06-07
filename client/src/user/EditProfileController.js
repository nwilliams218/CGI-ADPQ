(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
		userModule.controller('EditProfileController', ['$scope', '$rootScope', 'userService', 'postman', '$state', '$stateParams', 'gettextCatalog', 'authService', 'AUTH_EVENTS', 'STATES', 'familyService',
									    		function($scope,   $rootScope,   userService,   postman,   $state,   $stateParams,   gettextCatalog,   authService,   AUTH_EVENTS,   STATES,   familyService) {	
			$scope.states = STATES;
			
			$scope.user = {};			
			function getProfile(userId) {
				familyService.getUser(userId).then(function(user) {
					$scope.user = angular.copy(user);
				});
			}
			
			$scope.showRelation = false;
			if ($stateParams.id === 'new') {
			} else {
				getProfile($stateParams.id);
			}
			
			
			$scope.save = function(user) {
				familyService.saveUser(user).then(function(result) {
					postman.success('', gettextCatalog.getString('User updated'));					
					
					//$rootScope.$broadcast(AUTH_EVENTS.userInfo, user);

					$state.go('profile');
				}, function() {
					postman.error('', gettextCatalog.getString('User could not be updated'));
				});	
			};
	}]);
})();