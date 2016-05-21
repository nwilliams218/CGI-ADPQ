(function() {
	'use strict';
	
	angular.module('cgiAdpq')
		.constant('LOCALES', { 
			'English': {name: 'English', code: 'en-US', language: 'en'},
			'Spanish': {name: 'Español', code: 'es-MX', language: 'es'}
		})
		.constant('AUTH_EVENTS', {
			loginSuccess: 'auth-login-success',
			loginFailed: 'auth-login-failed',
			logoutSuccess: 'auth-logout-success',
			sessionTimeout: 'auth-session-timeout',
			notAuthenticated: 'auth-not-authenticated',
			notAuthorized: 'auth-not-authorized'
		})
		;	
})();