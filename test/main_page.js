var assert = require( 'assert' ),
By = require( 'selenium-webdriver' ).By,
firefox = require( 'selenium-webdriver/firefox' ),
test = require( 'selenium-webdriver/testing' );

test.describe( 'Main page', function () {
	var driver;

	test.before( function () {
		driver = new firefox.Driver();
	} );

	test.after( function () {
		driver.quit();
	} );

	test.it( 'should have "Log in" link', function () {
		driver.get( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' );
		driver.findElement( By.linkText( 'Log in' ) ).isDisplayed().then( function ( displayed ) {
			assert.equal( true, displayed );
		} );
	} );
} );
