(function() {
	'use strict';
	
	var mainModule = angular.module('cgiAdpq.main');
	
	mainModule.controller('MainController', ['$scope', '$rootScope', 'postman', '$state', 'gettextCatalog', '$localStorage', 'LOCALES', 'authService',
									  function($scope,  $rootScope,   postman,   $state,   gettextCatalog,   $localStorage,   LOCALES,   authService) {	
		$scope.page = $state.current.name;
		
		$rootScope.$on('$stateChangeStart', function (event, next) {
			$scope.page = next.name;
		});
		
		$scope.locales = LOCALES;
	  	$scope.currentLocale = $localStorage.currentLocale || LOCALES.English;
	  	
	  	$scope.setLocale = function(locale) {
		  	$scope.currentLocale = locale;
		  	$localStorage.currentLocale = locale;
		  	
		  	gettextCatalog.setCurrentLanguage(locale.language);
	  	};
	  	
		$scope.isAuthenticated = authService.isAuthenticated;
		
		$scope.logout = function() {
			authService.logout();
			
			$state.go('login');
		};
		
		$scope.userData = null;
		this.getUserData = function() {
			authService.getUserData().then(function(userData) {
				$scope.userData = userData;
			});
		};
		this.getUserData();
	}]);
})();