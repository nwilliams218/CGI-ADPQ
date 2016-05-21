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
				.state('profile', {
					url: "/profile",
					templateUrl: "user/profile.html",
					data: {auth:true}
				})
			;

			$urlRouterProvider.otherwise("/");
		}])
		.run(['$rootScope', 'gettextCatalog', '$localStorage', 'LOCALES', 'AUTH_EVENTS', 'authService', '$state', 'postman',
	 function ($rootScope,   gettextCatalog,   $localStorage,   LOCALES,   AUTH_EVENTS,   authService,   $state,   postman) {
			//set the current locale/language
			var currentLocale = $localStorage.currentLocale || LOCALES.English;
            gettextCatalog.setCurrentLanguage(currentLocale.language);
            
            //check for authentication (logged in)
			$rootScope.$on('$stateChangeStart', function (event, next) {
				if (next.hasOwnProperty('data') && next.data.hasOwnProperty('auth') && !authService.isAuthenticated()) {	
					event.preventDefault();
					
					$rootScope.$broadcast(AUTH_EVENTS.notAuthenticated, next);
				}
			});
			
			//listen for not being authenticated
			$rootScope.$on(AUTH_EVENTS.notAuthenticated, function(event, nextState) {
				$localStorage.nextState = nextState;
				
				postman.warn(gettextCatalog.getString('You must log in first'));
				
				$state.go('login');
			});
        }]);

	var mainModule = angular.module('cgiAdpq.main', []);	
	var navModule = angular.module('cgiAdpq.nav', []);	
	var userModule = angular.module('cgiAdpq.user', []);
})();