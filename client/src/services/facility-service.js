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
				var filtered = [];				
				for (var i = 0; i < data.length; i++) {
					if (data[i].zipcode == zipcode) {
						filtered.push(data[i]);
					}
				}

				
				var deferred = $q.defer();	
				
				deferred.resolve(filtered);
				
				return deferred.promise;
			}
		};
		
		
		return service;
	}]);
})();