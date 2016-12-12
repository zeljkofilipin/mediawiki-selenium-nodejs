module.exports = function ( grunt ) {

	require( 'load-grunt-tasks' )( grunt );

	// Project configuration
	grunt.initConfig( {

		// Configure ESLint task
		eslint: {
			all: [
				'**/*.js',
				'!node_modules/**'
			]
		},

		// Configure JSCS task
		jscs: {
			src: [
				'**/*.js',
				'!node_modules/**'
			],
			options: {
				config: '.jscsrc'
			}
		},

		// Configure JSHint task
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
		},

		// Configure WebdriverIO task
		webdriver: {
			test: {
				configFile: './wdio.conf.js'
			}
		},

		// Configure Nightwatch task
		nightwatch: {
			options: {
				// nightwatch settings
				// jscs:disable requireCamelCaseOrUpperCaseIdentifiers
				src_folders: [ 'nightwatch' ], // eslint-disable-line camelcase
				output_folder: 'report' // eslint-disable-line camelcase
				// jscs:enable requireCamelCaseOrUpperCaseIdentifiers
			}
		}

	} );

	// Default tasks
	grunt.registerTask( 'default', [ 'eslint', 'jscs', 'jshint', 'jsonlint', 'run', 'mochaTest' ] );
	grunt.registerTask( 'wdio', 'webdriver' );

};
