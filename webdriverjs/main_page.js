'use strict';
const assert = require( 'assert' ),
	{ Builder, By } = require( 'selenium-webdriver' ),
	test = require( 'selenium-webdriver/testing' );

test.describe( 'Main page', function () {
	let driver;

	test.beforeEach( function () {
		driver = new Builder()
		.forBrowser( 'chrome' )
		.build();
	} );

	test.afterEach( function () {
		driver.quit();
	} );

	test.it( 'should have "Log in" link', function () {
		driver.get( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' );
		driver.findElement( By.linkText( 'Log in' ) ).isDisplayed().then( function ( displayed ) {
			assert( displayed );
		} );
	} );
} );
