(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.controller('LoginController', ['$scope', 'authService', 'postman', '$state', '$localStorage', 'gettextCatalog',
									  function($scope,   authService,   postman,   $state,   $localStorage,   gettextCatalog) {	
		//console.log(user.isAuthed());
		
		$scope.credentials = {
			email: '',
			password: ''
		};
		
		$scope.login = function() {
			authService.login($scope.credentials).then(function(data) {
				postman.success(gettextCatalog.getString('Logged in!'));
				
				if ($localStorage.nextState) {
					var nextState = angular.copy($localStorage.nextState);
					delete $localStorage.nextState;
					$state.go(nextState.name, nextState.params || {});
				} else {
					$state.go('home');
				}
				
			}, function(data) {
				postman.error('', 'Could not login');
			});	
		};
	}]);
})();