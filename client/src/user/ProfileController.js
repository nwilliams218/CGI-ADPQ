(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
		userModule.controller('ProfileController', ['$scope', '$rootScope', 'userService', 'postman', '$state', 'AUTH_EVENTS', 'familyService',
									    	function($scope,   $rootScope,   userService,   postman,   $state,   AUTH_EVENTS,   familyService) {	
			$scope.user = {};
			
			if ($scope.$parent.userData != null) {
				$scope.user = $scope.$parent.userData;
			} else {
				$rootScope.$on(AUTH_EVENTS.userInfo, function(data){					
					$scope.user = data;
				});
			}
			
			$scope.family = [];
			$scope.getFamily = function(userId) {
				familyService.getFamily(userId).then(function(family) {
					$scope.family = family;
				});
			};
			$scope.getFamily($scope.$parent.userData.id);
	}]);
})();