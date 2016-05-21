describe('User Service', function() {

	beforeEach(module('cgiAdpq'));
	
	var authService, $q, session;
	
	beforeEach(inject(function (_authService_, _$q_, _gettextCatalog_, _session_) {
		authService = _authService_;
		$q = _$q_;
		session = _session_;
	}));
	
	it('successfully logs in', function () {
		var password = 'testing' + new Date().getDate();
		
		authService.login({email: 'testing@test.com', password: password}).then(function(data) {
			expect(data).toEqual('success');
		});
	});
	
	it('fails logging in', function () {
		var password = 'testing';
		
		authService.login({email: 'testing@test.com', password: password}).then(function(data) {
			expect(data).toEqual('success');
		});
	});
	
	it('checks existing authorization', function () {
		session.create(new Date().getTime(), new Date().getTime());
		
		expect(authService.isAuthenticated()).toBe(true);
	});

});
