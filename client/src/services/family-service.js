(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('familyService', ['$http', '$q', '$rootScope', 'AUTH_EVENTS',
								function ($http,   $q,   $rootScope,   AUTH_EVENTS) {
								  
		var data = [
			{
				id: 2,
				firstName: 'Walter',
				lastName: 'Woolf',
				profilePicture: 'https://dl.dropboxusercontent.com/s/6fcdjqaufim9njo/u298.png',
				address1: '1444 S. Alameda St.',
				address2: '',
				city: 'Los Angeles',
				state: 'CA',
				zip: '90021',
				phone: '3049339016',
				location: 'In Placement', 
				facility: 'White Plains Group Home',
				planUserId: 1,
				hasPlan: true,
				relationship: 'son',
				gender: 'Male',
				dob: '2005-01-15',
				group: true,
				goal: 'Reunification',
				items: [
					{
						id: 1,
						serviceType: 'Service 1',
						explanation: 'Explanation',
						provider: 'Providence',
						frequency: 'Weekly',
						comments: [
							{
								from: 'Amy Treyvan',
								date: '2016-03-22',
								body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac'
							},
							{
								from: 'John Treyvan',
								date: '2016-03-23',
								body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac'
							},
							{
								from: 'Lori Smith',
								date: '2016-04-22',
								body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac'
							}
						]
					},
					{
						id: 2,
						serviceType: 'Service 2',
						explanation: 'Explanation',
						provider: 'Moda',
						frequency: '5/1/2015 - 11/23/16',
						comments: [
							{
								from: 'Amy Treyvan',
								date: '2016-03-22',
								body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac'
							},
							{
								from: 'John Treyvan',
								date: '2016-03-23',
								body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac'
							},
							{
								from: 'Lori Smith',
								date: '2016-04-22',
								body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et sem eu est tristique condimentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras porta massa sit amet lectus mollis, aliquam placerat risus porttitor. Vivamus pulvinar ligula ac magna volutpat, at laoreet velit consectetur. Morbi eleifend et mauris ac tempus. Ut nec lacus tellus. In mollis nisi pulvinar, congue diam et, volutpat sem. In hac'
							}
						]
					}
				]
			},
			{
				id: 3,
				firstName: 'Lilly',
				lastName: 'Woolf',
				profilePicture: 'https://dl.dropboxusercontent.com/s/9f3kny5kq0saalh/u322.png',
				address1: '1444 S. Alameda St.',
				address2: '',
				city: 'Los Angeles',
				state: 'CA',
				zip: '90021',
				phone: '3049339016',
				location: 'Group Home',
				facility: 'Palo Alto Foster Services',
				planUserId: 2,
				hasPlan: true,
				relationship: 'daughter',
				gender: 'Female',
				dob: '2010-03-22',
				group: true,
				home: true
			},
			{
				id: 4,
				firstName: 'Leonard',
				lastName: 'Woolf',
				profilePicture: 'https://dl.dropboxusercontent.com/s/5bp3skd2joxc5w8/lwoolf.jpeg',
				address1: '1444 S. Alameda St.',
				address2: '',
				city: 'Los Angeles',
				state: 'CA',
				zip: '90021',
				phone: '3049339016',
				
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
					
			getUser: function(userId) {
				var d = new $q.defer();
	
				//dummy branching until working GET
				if (1==1) {	
					
					var user = userData;
					if (typeof(userId) !== 'undefined' && userId > 1) {
						user = data.find(function(ele) { return ele.id == userId; });	
					} else {
						user = angular.copy(userData);
					}
						
					d.resolve(user);
				} else {
					d.reject(AUTH_EVENTS.notAuthorized);
				}
	
				return d.promise;
			},
			
			saveUser: function(user) {
				
				if (user.id > 1 ||  !user.hasOwnProperty('id')) {
					var index = -1;
					for (var i = 0; i < data.length; i++) {
						if (data[i].id == user.id) {
							index = i;
						}
					} 

					if (i > -1 && user.hasOwnProperty('id')) {
						data.splice(index, 1, user);
					} else if (!user.hasOwnProperty('id')) {
						data.push(user);
					}
					
				} else {
					userData = user;
					
					$rootScope.$broadcast(AUTH_EVENTS.userInfo, user);
				}
				
				var d = new $q.defer();
				
				d.resolve('success');
				
				return d.promise;
			}

		};
		
		
		return service;
	}]);
})();