'use strict';
const assert = require( 'assert' ),
	webdriverio = require( 'webdriverio' ),
	options = { desiredCapabilities: { browserName: 'chrome' } },
	client = webdriverio.remote( options );

client
	.init()
	.url( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' )
	.isVisible( 'li#pt-login a' ).then( function( visible ) {
		assert( visible );
	} )
	.end();
