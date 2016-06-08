(function() {
	'use strict';
	
	var userModule = angular.module('cgiAdpq.user');
	
	userModule.factory('familyService', ['$http', '$q', '$rootScope', '$localStorage', 'session', 'AUTH_EVENTS', 'ENDPOINTS',
								function ($http,   $q,   $rootScope,   $localStorage,   session,   AUTH_EVENTS,   ENDPOINTS) {	
		var comments = [
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
		];
		
		var emailLookup = {
			'parent1@test.com': 1,
			'parent2@test.com': 2,
			'caseworker@test.com': 3
		};
		
		function getProfilePicture() {
			var pictures = [
				'https://dl.dropboxusercontent.com/s/9f3kny5kq0saalh/u322.png',
				'https://dl.dropboxusercontent.com/s/xifwhewttibrweq/u480.png',
				'https://dl.dropboxusercontent.com/s/6fcdjqaufim9njo/u298.png',
				'https://dl.dropboxusercontent.com/s/nou3oes1k6snx8a/u342.png'
			];
			
			
			var picture = pictures[Math.floor(Math.random() * pictures.length)];
			
			return picture;
		}

		
		var service = {
			getFamily: function(userId) {
				var deferred = $q.defer();
				
				var family;
				
				var key = 'family-' + session.data.userId;

				if (!$localStorage.hasOwnProperty(key)) { 
					$localStorage[key] = data;
				}
				
				family = $localStorage[key];
				
				
				deferred.resolve(family);
				
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
				
			getUserId: function(email) {
				if (emailLookup.hasOwnProperty(email)) {
					return emailLookup[email];
				} else {
					return null;
				}
			},
					
			getUser: function(userId) {
				userId = userId || 1;
				
				var userPromise = $http.get(ENDPOINTS.profile + 'view/' + userId);
				
				return userPromise.then(function(response) {
					return response.data;
				});
			},
			
			saveUser: function(user) {
				if (session.data.userId != user.id) {
					user.parentId = session.data.userId;
				}
				
				//extraneous leftover field
				user.group = 1;
				user.address = user.address1;
	
				if (!user.hasOwnProperty('profilePicture') || user.profilePicture === null || user.profilePicture === '') {
					user.profilePicture = getProfilePicture();
				}
				
				if (!user.hasOwnProperty('hasPlan')) {
					user.hasPlan = (!!Math.floor(Math.random() * 2)).toString();
				}
				
				var keys = Object.keys(user);
				
				
				//set unset fields to ""
				for (var i = 0; i < keys.length; i++) {
					var key = keys[i];
					
					if (user.hasOwnProperty(key) && user[key] === null) {
						user[key] = '';
					}
				}
				
				var method = 'addProfile';
				if (user.hasOwnProperty('id')) {
					method = 'updateProfile';
				}
				
				return $http.post(ENDPOINTS.profile + method, user).then(function(response) {
					if (response.data.success) {
						return 'success';
					} else {
						return 'error';
					}
				});
			}
		};
		
		
		return service;
	}]);
})();