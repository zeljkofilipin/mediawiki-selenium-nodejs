/* global browser */
'use strict';
const Page = require( './page' );

class MainPage extends Page {

	get login() { return browser.element( 'li#pt-login a' ); }

	open() {
		super.open( 'Main_Page' );
	}

}
module.exports = new MainPage();
