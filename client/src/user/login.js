(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.controller('LoginController', ['$scope', 'userService', 'postman', '$state',
									  function($scope,   userService,   postman,   $state) {	
			//console.log(user.isAuthed());
			
			$scope.credentials = {
				email: '',
				password: ''
			};
			
			$scope.login = function() {
				userService.login($scope.credentials).then(function(data) {
					postman.success('Logged in!');
					
					$state.go('home');
				}, function(data) {
					postman.error('', 'Could not login');
				});	
			};
		}
	]);
})();