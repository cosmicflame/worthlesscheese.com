; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'app/models/stackoverflow-user'
	, 'text!templates/stackoverflow-summary.html'
	, 'i18n!i18n/nls/bundle'
], function(Backbone, $, _, StackOverflowUser, template, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			_.bindAll(this, 'render')

			this.model = new StackOverflowUser()
		},

		render: function() {
			this.model.fetch().done(_.bind(function() {
					this.$el.html(this.template({
						model: this.model
						, i18n: i18n
					}))
				}, this)
			)
			return this
		}
	})
});
