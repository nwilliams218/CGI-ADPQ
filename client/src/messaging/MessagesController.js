(function() {
	'use strict';
	
	var messageModule = angular.module('cgiAdpq.message');
	
		messageModule.controller('MessagesController', ['$scope', '$rootScope', 'userService', 'postman', '$state', '$stateParams', 'AUTH_EVENTS', 'messageService', 'gettextCatalog',
									    		function($scope,   $rootScope,   userService,   postman,   $state,   $stateParams,   AUTH_EVENTS,   messageService,   gettextCatalog) {	
			
			$scope.messageId = $stateParams.id;
			$scope.message = null;
			console.log($scope.messageId);		    	
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

				    if (typeof $scope.messageId !== 'undefined' && $scope.messageId !== '') {
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
			
			$scope.newMessage = null;
			$scope.createNewMessage = function(replyToId, subject) {
				$scope.newMessage = {
					from: $scope.$parent.userData.firstName + ' ' + $scope.$parent.userData.lastName,
					subject: '',
					body: ''	
				};
				
				if (typeof replyToId !== 'undefined') {
					$scope.newMessage.replyToId = replyToId;					
				}
				
				if (typeof subject !== 'undefined') {
					$scope.newMessage.subject = 'Re: ' + subject;
				}
			};
			
			$scope.sendMessage = function(message) {
				if (message.subject === '') {
					postman.warn(gettextCatalog.getString('Subject required'));
				} else if (message.body === '') {
					postman.warn(gettextCatalog.getString('Body required'));
				} else {
				
					messageService.sendMessage(message).then(function() {
						postman.success(gettextCatalog.getString('Message sent'));
						$scope.newMessage = null;						
						$state.go('messages', {id:null});
					}, function() {
						postman.error(gettextCatalog.getString('Your message could not be sent'));
					});
				}			
			};
		}]);
})();