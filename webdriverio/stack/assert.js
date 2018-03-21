'use strict';
const assert = require( 'assert' );
describe( 'Main page', function () {
	it( 'should have "Log in" link', function () {
		browser.url( 'Main_Page' );
		assert( browser.isVisible( 'li#pt-login a' ) );
	} );
} );
