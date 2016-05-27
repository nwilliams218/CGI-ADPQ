(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('familyService', ['$http', '$q',
								function ($http,   $q) {
								  
		var data = [
			{
				firstName: 'Walter',
				lastName: 'Woolf',
				profilePicture: 'https://dl.dropboxusercontent.com/s/6fcdjqaufim9njo/u298.png',
				location: 'White Plains Group Home',
				planUserId: 1,
				hasPlan: true,
				relationship: 'son',
				gender: 'Male',
				dob: '2005-01-15',
				group: true
			},
			{
				firstName: 'Lilly',
				lastName: 'Woolf',
				profilePicture: 'https://dl.dropboxusercontent.com/s/9f3kny5kq0saalh/u322.png',
				location: 'Palo Alto Foster Services',
				planUserId: 2,
				hasPlan: true,
				relationship: 'daughter',
				gender: 'Female',
				dob: '2010-03-22',
				group: true,
				home: true
			},
			{
				firstName: 'Leonard',
				lastName: 'Woolf',
				profilePicture: 'https://dl.dropboxusercontent.com/s/5bp3skd2joxc5w8/lwoolf.jpeg',
				location: 'Palo Alto Foster Services',
				planUserId: 2,
				hasPlan: false,
				relationship: 'husband',
				gender: 'Male',
				dob: '1972-07-14'
			}
		];							  

		var service = {
			getFamily: function(userId) {
				var deferred = $q.defer();
				
				deferred.resolve(data);
				
				return deferred.promise;
			},
			
			getPlans: function(userId) {
				var plans =  plans.filter(function(ele) {
					return ele.hasOwnProperty('hasPlan') && ele.hasPlan == true;
				});
				
				var deferred = $q.defer();
				
				deferred.resolve(plans);
				
				return deferred.promise;
			}
		};
		
		
		return service;
	}]);
})();