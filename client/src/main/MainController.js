(function() {
	'use strict';
	
	var mainModule = angular.module('cgiAdpq.main');
	
	mainModule.controller('MainController', ['$scope', '$rootScope', 'postman', '$state', 'gettextCatalog', '$localStorage', 'LOCALES', 'AUTH_EVENTS', 'authService', 'familyService',
									  function($scope,  $rootScope,   postman,   $state,   gettextCatalog,   $localStorage,   LOCALES,   AUTH_EVENTS,   authService,   familyService) {	
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
		
		$scope.userLoaded = false;
		$scope.userData = null;
		this.getUserData = function() {
			familyService.getUser().then(function(userData) {
				$scope.userLoaded = true;
				
				$scope.userData = angular.copy(userData);
			});
		};
		this.getUserData();
				
		$rootScope.$on(AUTH_EVENTS.userInfo, function(event, data) {
			$scope.userData = angular.copy(data);
		});
	}]);
})();