describe('Login Controller', function() {

	beforeEach(module('cgiAdpq'));
	
	var LoginController,
	scope;
	
	beforeEach(inject(function ($rootScope, $controller) {
		scope = $rootScope.$new();
		LoginController = $controller('LoginController', {
			$scope: scope
		});
	}));
	
	it('has blank credentials', function () {
		expect(scope.credentials).toEqual({email: '', password: ''});
	});
	
	it('calls the login scope function', function () {
		scope.login();
	});


});
