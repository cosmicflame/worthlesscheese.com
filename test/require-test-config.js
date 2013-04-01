; require.config({
	baseUrl: '../js',

	paths: {
		//Test
		'jasmine': '../test/lib/jasmine-1.3.1/jasmine'
		, 'jasmine-html': '../test/lib/jasmine-1.3.1/jasmine-html'
		, 'sinon': '../test/lib/sinon/sinon-1.6.0'
		, 'specs': '../test/specs/'
	},

	shim: {
		'jasmine-html': {
			deps: ['jasmine']
		},
		'jasmine': {
			exports: 'jasmine'
		},
		'sinon': {
			exports: 'sinon'
		}
	}
});
