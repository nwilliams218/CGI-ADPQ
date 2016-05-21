(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.service('session', [function () {
		this.create = function (sessionId, userId, userRole) {
			this.id = sessionId;
			this.userId = userId;
			this.userRole = userRole;
		};

		this.destroy = function () {
			this.id = null;
			this.userId = null;
			this.userRole = null;
		};
	}]);
})();