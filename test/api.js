const assert = require( 'assert' ),
	MWBot = require( 'mwbot' );
let bot = new MWBot( {
	apiUrl: 'https://en.wikipedia.beta.wmflabs.org/w/api.php'
} );

describe( 'API', function () {

	it( 'Main Page should exist', function () {

		return bot.read( 'Main Page', { timeout: 8000 } ).then( ( response ) => {

			// console.log(response);
			// { batchcomplete: '', query: { pages: { '1': [Object] } } }

			// console.log(response.query);
			// { '1': { pageid: 1, ns: 0, title: 'Main Page', revisions: [Array] } } }

			assert.equal( response.query.pages[ '1' ].pageid, 1 );

		} );

	} );

	it( 'Missing Page should not exist', function () {

		return bot.read( 'Missing Page', { timeout: 8000 } ).then( ( response ) => {

			// console.log(response);
			// { batchcomplete: '', query: { pages: { '-1': [Object] } } }

			// console.log(response.query);
			// { pages: { '-1': { ns: 0, title: 'Missing Page', missing: '' } } }

			assert.equal( response.query.pages[ '-1' ].missing, '' );

		} );

	} );

} );
