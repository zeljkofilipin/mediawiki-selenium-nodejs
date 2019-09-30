var webdriverio = require( 'webdriverio' ),
	options = { desiredCapabilities: { browserName: 'chrome' } },
	client = webdriverio.remote( options );

client
	.init()
	.url( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' )
	.isVisible( 'li#pt-login a' ).then( function ( visible ) {
		console.log( 'Log in link visible: ' + visible ); // eslint-disable-line no-console
	} )
	.end();
