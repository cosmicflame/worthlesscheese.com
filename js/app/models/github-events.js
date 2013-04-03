; define([
	'backbone'
	, 'underscore'
	, 'config'
], function(Backbone, _, config) {

	return Backbone.Model.extend({

		baseUrl: 'https://api.github.com/users/{userId}/events',

		url: function() {
			return this.baseUrl.replace('{userId}', config.github.userid)
		},

		parse: function(data) {

			var myEvents = []

			_.each(data.slice(0, config.github.events.numToShow), function(event) {
				myEvents.push({
					type: event.type,
					repo: event.repo.name
				})
			})

			return {
				ghEvents: myEvents
			}
		}
	})
});
