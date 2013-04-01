; define([
	"backbone"
	, "underscore"
	, 'app/router'
	, 'app/views/home'
], function(Backbone, _, Router, Home) {

	return Backbone.View.extend({

		initialize: function() {
			//Create all child pages
			this.pages = {
				"home": new Home()
			}
		},

		render: function() {
			//Render each child page
			_.each(this.pages, _.bind(function(page) {
				this.$el.append(page.render().$el)
				page.$el.hide()
			}, this))
			return this
		}
	})
});
