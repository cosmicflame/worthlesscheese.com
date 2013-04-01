; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'app/models/github-user'
	, 'app/models/github-events'
	, 'text!templates/github-summary.html'
	, 'i18n!i18n/nls/bundle'
], function(Backbone, $, _, GitHubUser, GitHubEvents, template, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			_.bindAll(this, 'renderPage')

			this.ghUsers = new GitHubUser()
			this.ghEvents = new GitHubEvents()
		},

		render: function() {
			this.ghUsers.fetch().done(this.renderPage)
			this.ghEvents.fetch().done(this.renderPage)
			return this
		},

		renderPage: _.after(2, function() {
			this.$el.html(this.template({
				user: this.ghUsers
				, events: this.ghEvents.get('ghEvents')
				, i18n: i18n
			}))
		})
	})
});
