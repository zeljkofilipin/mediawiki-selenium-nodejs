'use strict';
const assert = require( 'assert' ),
	MainPage = require( '../pageobjects/main.page' );

describe( 'Main Page', function () {
	it( 'should have "Log in" link', function () {
		MainPage.open();
		assert( MainPage.login.isVisible() );
	} );
} );
