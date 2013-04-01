; require.config({
	paths: {
		//Libs
		'backbone': 'lib/backbone/backbone'
		, 'jquery': 'lib/jquery/jquery-1.9.1'
		, 'underscore': 'lib/underscore/underscore'
		, 'bootstrap': 'lib/bootstrap/bootstrap'

		//App
		, 'config': 'app/config'
	},

	shim: {
		'backbone': {
			deps: [
				'underscore'
				, 'jquery'
			],
			exports: "Backbone"
		},
		'underscore': {
			exports: "_"
		},
		'bootstrap': {
			deps: [
				'jquery'
			]
		}
	}
});
