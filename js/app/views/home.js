; define([
	'backbone'
	, 'jquery'
	, 'underscore'
	, 'text!templates/home.html'
	, 'app/views/github-summary'
	, 'app/views/stackoverflow-summary'
	, 'app/views/blog-summary'
	, 'i18n!i18n/nls/bundle'
	, 'bootstrap'
], function(backbone, $, _, template, GitHubSummary, StackOverflowSummary, BlogSummary, i18n) {

	return Backbone.View.extend({

		template: _.template(template),

		initialize: function() {
			this.githubSummary = new GitHubSummary()
			this.stackoverflowSummary = new StackOverflowSummary()
			this.blogSummary = new BlogSummary()
		},

		render: function() {
			this.$el.html(this.template({
				i18n: i18n
			}));

			this.$('.github-summary').append(this.githubSummary.render().$el)
			this.$('.stackoverflow-summary').append(this.stackoverflowSummary.render().$el)
			this.$('.blog-summary').append(this.blogSummary.render().$el)

			return this
		}
	})
});
