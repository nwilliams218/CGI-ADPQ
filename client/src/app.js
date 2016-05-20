(function() {
	'use strict';
	
	angular.module('cgiAdpq', ['ui.router', 'ui.bootstrap', 'Postman', 'ngStorage', 'gettext', 'cgiAdpq.main', 'cgiAdpq.nav', 'cgiAdpq.user'])
		.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
		 function($stateProvider,   $urlRouterProvider,   $locationProvider) {  
			$locationProvider.html5Mode(true);
						 
			$stateProvider
				.state('home', {
					url: "/",
					templateUrl: "staticPages/home.html"
				})
				.state('login', {
					url: "/login",
					templateUrl: "user/login.html"
				})
				.state('about', {
					url: "/about",
					templateUrl: "staticPages/about.html"
				})
				.state('contact', {
					url: "/contact",
					templateUrl: "staticPages/contact.html"
				})
			;

			$urlRouterProvider.otherwise("/");
		}])
		.run(['gettextCatalog', '$localStorage', 'LOCALES', function (gettextCatalog, $localStorage, LOCALES) {
			var currentLocale = $localStorage.currentLocale || LOCALES.English;
            gettextCatalog.setCurrentLanguage(currentLocale.language);
        }]);

	var mainModule = angular.module('cgiAdpq.main', []);	
	var navModule = angular.module('cgiAdpq.nav', []);	
	var userModule = angular.module('cgiAdpq.user', []);
})();