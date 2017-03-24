'use strict';
module.exports = {
	'Main page': function ( client ) {
		client
		.url( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' )
		.assert.elementPresent( 'li#pt-login a' )
		.end();
	}
};
