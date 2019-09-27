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
				args: [ 'test/main_page.js' ]
			},
			webdriverio: {
				args: [ 'webdriverio/stack/webdriverio.js' ]
			}
		},

		// Configure Mocha task
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					timeout: 100000
				},
				src: [ 'webdriverjs/**/*.js' ]
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
	grunt.registerTask( 'default', [ 'eslint', 'jsonlint', 'run', 'mochaTest', 'nightwatch', 'webdriver' ] );

};
