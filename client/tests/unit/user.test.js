describe('User Service', function() {

	beforeEach(module('cgiAdpq'));
	
	var userService, $q;
	
	beforeEach(inject(function (_userService_, _$q_) {
		userService = _userService_;
		$q = _$q_;
	}));
	
	it('successfully logs in', function () {
		var password = 'testing' + new Date().getDate();
		
		userService.login({email: 'testing@test.com', password: password}).then(function(data) {
			expect(data).toEqual('success');
		});
	});
	
	it('fails logging in', function () {
		var password = 'testing';
		
		userService.login({email: 'testing@test.com', password: password}).then(function(data) {
			expect(data).toEqual('success');
		});
	});
	
	it('checks existing authorization', function () {
		expect(userService.isAuthed()).toBe(true);
	});

});
