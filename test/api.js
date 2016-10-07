var assert = require( 'assert' ),
Nodemw = require( 'nodemw' );

describe( 'API', function () {
	var client;

	before( function () {
		client = new Nodemw( {
			protocol: 'https',
			server: 'en.wikipedia.beta.wmflabs.org',
			path: '/w'
		} );
	} );

	it( 'Main Page should exist', function ( done ) {
		client.getArticle( 'Main Page', function ( err, data ) {
			// console.log( data );
			// <!--
			// If you are reading the source wikitext of the main page:
			// ...
			assert( data );
			assert.notEqual( data, undefined );
			done();
		} );
	} );

	it( 'Missing Page should not exist', function ( done ) {
		client.getArticle( 'Missing Page', function ( err, data ) {
			// console.log( data );
			// undefined
			assert.equal( data, undefined );
			done();
		} );
	} );
} );
