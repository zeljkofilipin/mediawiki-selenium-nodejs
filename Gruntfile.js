module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		// Configure a JSCS task
		jscs: {
			src: [
				'**/*.js',
				'!node_modules/**'
			],
			options: {
				config: '.jscsrc'
			}
		},

		// Configure a JSHint task
		jshint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			],
			options: {
				jshintrc: '.jshintrc'
			}
		},

		// Configure JSONLint task
		jsonlint: {
			all: [
				'**/*.json',
				'!node_modules/**'
			]
		},

		// Configure run task
		run: {
			index: {
				args: [ 'selenium/main_page.js' ]
			}
		},

		// Configure Mocha task
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					timeout: 100000
				},
				src: [ 'test/**/*.js' ]
			}
		}

	} );

	// Default tasks
	grunt.registerTask( 'default', [ 'jscs', 'jshint', 'jsonlint', 'run', 'mochaTest' ] );

};
