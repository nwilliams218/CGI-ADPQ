(function() {
	'use strict';
	
	var mainModule = angular.module('cgiAdpq.main');
	
	mainModule.controller('MainController', ['$scope', 'postman', '$state', 'gettextCatalog', '$localStorage', 'LOCALES', 'authService',
									  function($scope,  postman,   $state,   gettextCatalog,   $localStorage,   LOCALES,   authService) {	
			$scope.locales = LOCALES;
		  	$scope.currentLocale = $localStorage.currentLocale || LOCALES.English;

		  	$scope.setLocale = function(locale) {
			  	$scope.currentLocale = locale;
			  	$localStorage.currentLocale = locale;
			  	
			  	gettextCatalog.setCurrentLanguage(locale.language);
		  	};
		  	
			$scope.isAuthorized = authService.isAuthorized;

			$scope.userData = null;
			this.getUserData = function() {
				authService.getUserData().then(function(userData) {
					$scope.userData = userData;
				});
			};
			this.getUserData();
		}
	]);
})();