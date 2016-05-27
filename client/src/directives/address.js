(function() {
	'use strict';
	
	var module = angular.module('cgiAdpq').directive('address', ['$parse', function ($parse) {
	return {
		restrict: 'E',
		scope: {
		    model: '=model',
            full: '=full'
		},
		template: '<span ng-show="full && model.Address1">{{model.address1}}<br></span>' +
					'<span ng-show="full && model.Address2">{{model.address2}}<br></span>' +
					'<span ng-show="model.City">{{model.City}}</span>' +
					'<span ng-show="model.City && model.State">, </span>' +
					'<span ng-show="model.State">{{model.State}} </span>' +
					'<span ng-show="full && model.PostalCode"> {{model.PostalCode}}<br></span>' +
					'<span ng-show="model.Country && model.Country != \'US\'"> {{model.Country}}<br></span>'
		,
		replace: false,
		link: function (scope, ele, attrs) {
		}
	};
}]);

	
})();