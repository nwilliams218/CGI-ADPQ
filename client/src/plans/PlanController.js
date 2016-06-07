(function() {
	'use strict';
	
	var planModule = angular.module('cgiAdpq.plan');
	
		planModule.controller('PlanController', ['$scope', '$rootScope', 'userService', 'postman', '$state', '$stateParams', 'AUTH_EVENTS', 'familyService',
									     function($scope,   $rootScope,   userService,   postman,   $state,   $stateParams,   AUTH_EVENTS,   familyService) {	
			$scope.user = {};
			$scope.getUser = function(userId) {
				familyService.getUser(userId).then(function(user) {
					$scope.user = user;
				});
			};
			$scope.getUser($stateParams.id);
			
			$scope.showComments = {};
			
			$scope.toggleComments = function(itemId) {
				$scope.showComments[itemId] = !$scope.showComments[itemId];
			};
			
			$scope.comment = null;
			$scope.addComment = function() {
				$scope.comment = {
					from: $scope.$parent.userData.firstName + ' ' + $scope.$parent.userData.lastName,
					date: new Date(),
					body: ''
				};
			};
			
			$scope.saveComment = function(item, comment) {
				item.comments.push(comment);
				$scope.comment = null;
			};
	}]);
})();