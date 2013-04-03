; define([
	'backbone'
	, 'config'
], function(Backbone, config) {

	return Backbone.Model.extend({

		userInfoUrl: "https://api.stackexchange.com/2.1/users/{userId}?order=desc&sort=reputation&site={siteName}",

		url: function() {
			return this.userInfoUrl
				.replace('{userId}', config.stackexchange.userid)
				.replace('{siteName}', config.stackexchange.sitename)
		},

		parse: function(data) {
			return data.items[0]
		}
	})
});
