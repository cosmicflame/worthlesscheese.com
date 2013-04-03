; define([
	'backbone'
	, 'config'
], function(Backbone, config) {

	return Backbone.Model.extend({

		url: function() {
			return config.wordpress.blogUrl + '?json=get_recent_posts'
		}
	})
});
