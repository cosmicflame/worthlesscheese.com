; define([
	'backbone'
], function(Backbone) {

	return Backbone.Model.extend({

		userId: 121416,

		url: function() {
			return "https://api.stackexchange.com/2.1/users/{userId}?order=desc&sort=reputation&site=stackoverflow".replace('{userId}', this.userId)
		},

		parse: function(data) {
			return data.items[0]
		}
	})
});
