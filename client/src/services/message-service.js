(function() {
	'use strict';
	
	var messageModule = angular.module('cgiAdpq.message');
	
	messageModule.factory('messageService', ['$http', '$q', 'session',
							  function ($http,   $q,   session) {
		var service = {
			getMessages: function(userId) {
				var data = [
					{
						id: 1,
						subject: 'Visitations',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac',
						author: 'Amy Taylor',
						date: '2016-05-22',
						read: false
					},
					{
						id: 2,
						subject: 'PTA',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac',
						author: 'Amy Taylor',
						date: '2016-04-22',						
						read: true
					},
					{
						id: 3,
						subject: 'Home Checklist',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac',
						author: 'Amy Taylor',
						date: '2016-05-24',						
						read: false
					},
					{
						id: 4,
						subject: 'Summer Vacation',
						body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac',
						author: 'Amy Taylor',
						date: '2016-05-27',
						read: false
					}
				];
				
				var deferred = $q.defer();
				
				deferred.resolve(data);
				
				return deferred.promise;
			}
		};
		
		
		return service;
	}]);
})();