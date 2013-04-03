; define([
	'backbone'
	, 'config'
], function(Backbone, config) {

	return Backbone.Model.extend({

		baseUrl: 'https://api.github.com/users/',

		url: function() {
			return this.baseUrl + config.github.userid
		}

	})
});
