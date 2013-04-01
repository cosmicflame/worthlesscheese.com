define([
	'backbone'
], function(Backbone) {
	return Backbone.Router.extend({

		initialize: function(pages, navigation) {
			this.pages = pages
			this.navigation = navigation
		},

		routes: {
			"page/:name": "navigateToPage"
		},

		navigateToPage: function(pageName) {
			var page = this.pages[pageName]
			if (page) {
				if (this.currentPage) {
					this.currentPage.$el.hide()
				}
				this.currentPage = page
				page.$el.show()

				this.navigation.selectPage(pageName)
			}
		}
	})
})
