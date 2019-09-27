describe( 'Main page', function () {
	it( 'should have "Log in" link', function () {
		browser.url( 'Main_Page' );
		console.log( 'Log in link visible: ' + browser.isVisible( 'li#pt-login a' ) );  // eslint-disable-line no-console
	} );
} );
