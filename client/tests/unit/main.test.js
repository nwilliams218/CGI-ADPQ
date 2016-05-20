describe('Main Controller', function() {
	beforeEach(module('ui.router'));
	beforeEach(module('gettext'));
	beforeEach(module('ngStorage'));
	beforeEach(module('cgiAdpq'));
	beforeEach(module('cgiAdpq.main'));
	
	var controller,
	scope,
	$localStorage,
	LOCALES;
	
	var currentState = 'login';
	var otherState = 'contact';
	
	beforeEach(inject(function ($rootScope, $controller, $state, _gettextCatalog_, _$localStorage_, _LOCALES_) {
		scope = $rootScope.$new();
		$localStorage = _$localStorage_;
		LOCALES = _LOCALES_;
		
		controller = $controller('MainController', {
			$scope: scope,
			//postman: postman,
			$state: {current: {name: currentState}},
			gettextCatalog: _gettextCatalog_,
			$localStorage: _$localStorage_,
			LOCALES: LOCALES
		});
	}));
	
	it('has a default current locale', function () {
		expect(scope.currentLocale).toEqual(LOCALES.English);
	});
	
	it('remembers the chosen locale', function () {
		var localeToSet = LOCALES.Spanish;
		
		scope.setLocale(localeToSet);
		
		expect(scope.currentLocale).toEqual(localeToSet);
		expect($localStorage.currentLocale).toEqual(localeToSet);
	});
	

});
