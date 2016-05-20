(function() {
	'use strict';
	
	angular.module('cgiAdpq', ['ui.router', 'ui.bootstrap', 'Postman', 'cgiAdpq.nav', 'cgiAdpq.user'])
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
		}]);

	var navModule = angular.module('cgiAdpq.nav', []);	
	var userModule = angular.module('cgiAdpq.user', []);
})();