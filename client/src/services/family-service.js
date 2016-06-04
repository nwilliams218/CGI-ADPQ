(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('familyService', ['$http', '$q', '$rootScope', 'AUTH_EVENTS',
								function ($http,   $q,   $rootScope,   AUTH_EVENTS) {
								  
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
		
		var userData = {
			id: 1,
			firstName: 'Virginia',
			lastName: 'Woolf',
			profilePicture: 'https://dl.dropboxusercontent.com/s/3o5ahnqhnf17820/u311.png',
			address1: '1444 S. Alameda St.',
			address2: '',
			city: 'Los Angeles',
			state: 'CA',
			zip: '90021',
			phone: '3049339016',
			cell: '5037575467',
			email: 'virginiawoolf@lighthouse.com',
			gender: 'Female',
			dob: new Date (1882, 1, 25),
		};
		
		var service = {
			getFamily: function(userId) {
				var deferred = $q.defer();
				
				deferred.resolve(data);
				
				return deferred.promise;
			},
			
			getPlans: function(userId) { 
				var plans =  data.filter(function(ele) {
					return ele.hasOwnProperty('hasPlan') && ele.hasPlan === true;
				});
				
				var deferred = $q.defer();
				
				deferred.resolve(plans);
				
				return deferred.promise;
			},
					
			getUser: function() {
				var d = new $q.defer();
	
				//dummy branching until working GET
				if (1==1) {	
									
					$rootScope.$broadcast(AUTH_EVENTS.userInfo, userData);
						
					d.resolve(userData);
				} else {
					d.reject(AUTH_EVENTS.notAuthorized);
				}
	
				return d.promise;
			},
			
			saveUser: function(user) {
				userData = user;
				
				var d = new $q.defer();
				
				d.resolve('success');
				
				return d.promise;
			}

		};
		
		
		return service;
	}]);
})();