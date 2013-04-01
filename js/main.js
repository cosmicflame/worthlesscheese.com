//Load in the require.js config file
; require(['require-config'], function() {

	//Start the app
	require([
		'config'
		, 'app/app'
		, 'app/views/navigation'
		, 'app/router'
		, 'backbone'
		, 'jquery'
		, 'bootstrap'
	], function (config, App, Navigation, Router, Backbone, $) {

		//Create navbar
		this.navigation = new Navigation({
			el: $('.navigation')
		}).render()

		//Create main app
		this.app = new App({
			el: $('.container')
		}).render()

		//Create router
		this.router = new Router(this.app.pages, this.navigation)
		Backbone.history.start()

		//If we're not on a page yet, default to the Home page
		if (!this.router.currentPage) {
			this.router.navigate('page/home', {trigger: true})
		}
	})
});
