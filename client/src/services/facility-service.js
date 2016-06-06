(function() {
	'use strict';
	
	var facilityModule = angular.module('cgiAdpq.facility');
	
	facilityModule.factory('facilityService', ['$http', '$q', '$rootScope', 'AUTH_EVENTS',
									  function ($http,   $q,   $rootScope,   AUTH_EVENTS) {
		var data = [
			{
				name: 'White Oaks',
				zipcode: 97201
			},
			{
				name: 'Salmon Plains',
				zipcode: 97201
			},
			{
				name: 'Santa Monica Foster Services',
				zipcode: 97201
			},
			{
				name: 'Red Oaks',
				zipcode: 97202
			},
			{
				name: 'Trout Plains',
				zipcode: 97202
			},
			{
				name: 'Santa Cruz Foster Services',
				zipcode: 97202
			}
		];	
			
		var service = {
			getFacilities: function(zipcode) {
				var deferred = $q.defer();	
				
				deferred.resolve(data);
				
				return deferred.promise;
			}
		};
		
		
		return service;
	}]);
})();