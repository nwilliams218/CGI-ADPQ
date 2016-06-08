(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.controller('RegisterController', ['$scope', '$rootScope', 'authService', 'familyService', 'postman', '$state', '$localStorage', 'gettextCatalog', 'AUTH_EVENTS',
									 	 function($scope,   $rootScope,   authService,   familyService,   postman,   $state,   $localStorage,   gettextCatalog,   AUTH_EVENTS) {	
		$scope.credentials = {
			email: '',
			password: '',
			confirm: ''
		};
		
		$scope.passwordsMatch = true;
		$scope.register = function() {
			$scope.passwordsMatch = true;
			
			if ($scope.credentials.password != $scope.credentials.confirm) {
				$scope.passwordsMatch = false;	
			} else {
				//save password
				familyService.getUser(familyService.getUserId($scope.credentials.email)).then(function(data){
					var user = data;
					
					user.password = $scope.credentials.password;
					familyService.saveUser(user).then(function(save) {

						if (save === 'error') {
							postman.error(gettextCatalog.getString('There was a problem registering'));
						} else {						
							authService.login($scope.credentials).then(function(data) { console.log('here');
								$rootScope.loggedinEmail = $scope.credentials.email;
								
								$rootScope.$broadcast(AUTH_EVENTS.loginSuccess);
								
								$state.go('editProfile', {id: user.id});
							});
						}
					});
				});
				
			}
		};
	}]);
})();