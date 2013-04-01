; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'text!templates/home.html'
	, 'app/views/github-summary'
	, 'i18n!i18n/nls/bundle'
	, 'bootstrap'
], function(backbone, $, _, template, GitHubSummary, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			this.githubSummary = new GitHubSummary()
		},

		render: function() {
			this.$el.html(this.template({
				i18n: i18n
			}));

			this.$('.github-summary').append(this.githubSummary.render().$el)

			return this
		}
	})
});
