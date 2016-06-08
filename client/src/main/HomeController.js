(function() {
	'use strict';
	
	var mainModule = angular.module('cgiAdpq.main');
	
	mainModule.controller('HomeController', ['$scope', '$rootScope', 'postman', '$state', 'gettextCatalog', '$localStorage', 'LOCALES', 'messageService', 'eventService', 'familyService', 'AUTH_EVENTS',
									  function($scope,  $rootScope,   postman,   $state,   gettextCatalog,   $localStorage,   LOCALES,   messageService,   eventService,   familyService,   AUTH_EVENTS) {	
		
		function bootstrap() {
			$scope.getMessages($scope.user.id);
			$scope.getPlans($scope.user.id);
			$scope.getEvents($scope.user.id);
		}
				
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
		    });
		};
		
		
		$scope.plans = [];
		$scope.getPlans = function(id) {
			familyService.getPlans($scope.$parent.userData.id).then(function(plans) {
				$scope.plans = plans;
			});
		};	
		
		
		$scope.events = [];
		$scope.getEvents = function(id) {
			eventService.getEvents(id).then(function(data) {
				var events = {};
				data.forEach(function(ele) {
				  if (!events.hasOwnProperty(ele.eventFor)) {
				    events[ele.eventFor] = [];
				  }
				  
				  events[ele.eventFor].push(ele);
				});
				$scope.events = events;
			});
		};
		
		if ($scope.$parent.userData !== null) {
			$scope.user = angular.copy($scope.$parent.userData);
			
			bootstrap();
		} else {
			$rootScope.$on(AUTH_EVENTS.userInfo, function(event, data){					
				$scope.user = angular.copy(data);
				
				bootstrap();
			});
		}
		
	}]);
})();