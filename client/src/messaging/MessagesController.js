(function() {
	'use strict';
	
	var messageModule = angular.module('cgiAdpq.message');
	
		messageModule.controller('MessagesController', ['$scope', '$rootScope', 'userService', 'postman', '$state', '$stateParams', 'AUTH_EVENTS', 'messageService',
									    		function($scope,   $rootScope,   userService,   postman,   $state,   $stateParams,   AUTH_EVENTS,   messageService) {	
			
			$scope.messageId = $stateParams.id;
			$scope.message = null;
					    	
			$scope.messageType = 'received';
										    	
			$scope.unreadCount = 0;
			$scope.messages = [];
			$scope.getMessages = function(id) {
				messageService.getMessages(id).then(function(messages) {
					$scope.messages = messages;
	
					var count = 0;
					angular.forEach($scope.messages, function(message){
				        count += message.read ? 0 : 1;
				    });			
				    $scope.unreadCount = count;
				    
				    if (typeof $scope.messageId !== 'undefined') {
					    $scope.message = messages.find(function(ele) {
						    return ele.id == $scope.messageId;
					    });
					    
					    if ($scope.message !== null) {
						    $scope.message.read = true;
						    messageService.markRead($scope.message.id);
					    }
				    }
			    });
			};
			$scope.getMessages($scope.$parent.userData.id);
		}]);
})();