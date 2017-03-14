// setup
var assert = require( 'assert' ),
	webdriver = require( 'selenium-webdriver' ),
	By = webdriver.By,
	driver = new webdriver.Builder()
	.forBrowser( 'chrome' )
	.build();

// test
driver.get( 'https://en.wikipedia.beta.wmflabs.org/wiki/Main_Page' );
driver.findElement( By.linkText( 'Log in' ) ).isDisplayed().then( displayed => {
	assert( displayed );
} );

// teardown
driver.quit();
