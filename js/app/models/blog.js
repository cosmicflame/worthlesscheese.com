; define([
	'backbone'
], function(Backbone) {

	return Backbone.Model.extend({

		url: 'http://www.worthlesscheese.com/blog/?json=get_recent_posts'
	})
});
