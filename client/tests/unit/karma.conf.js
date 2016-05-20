module.exports = function(config) {
  config.set({
    basePath: '../../',
    frameworks: ['jasmine'],
    browsers: ['PhantomJS'],
    files: [
		'../bower_components/angular/angular.js',
		'!tmp/angular/angular.min.js',
	    '../bower_components/angular-mocks/angular-mocks.js',
		'tmp/**/*.js',
	    'src/**/*.js',
    	'tests/unit/**/*.test.js'
	],
	//logLevel: config.LOG_DEBUG,
	included: false,
	singleRun: true,
	
	reporters: ['progress', 'coverage'],

    preprocessors: {
		'src/**/*.js': ['coverage']
    },
    
    coverageReporter: {
		dir : 'tmp/coverage',
		reporters: [
			{ type: 'html', subdir: '.' },
			{ type: 'text', subdir: '.', file: 'text.txt' },
	        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' }
		]
    }
  });
};