(function() {
	'use strict';
	
	var mainModule = angular.module('cgiAdpq.main');
	
	mainModule.controller('MainController', ['$scope', 'postman', '$state', 'gettextCatalog', '$localStorage', 'LOCALES',
									  function($scope,  postman,   $state,   gettextCatalog,   $localStorage,   LOCALES) {	
			$scope.locales = LOCALES;
		  	$scope.currentLocale = $localStorage.currentLocale || LOCALES.English;

		  	$scope.setLocale = function(locale) {
			  	$scope.currentLocale = locale;
			  	$localStorage.currentLocale = locale;
			  	
			  	gettextCatalog.setCurrentLanguage(locale.language);
		  	};
		}
	]);
})();