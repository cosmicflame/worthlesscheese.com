; define([
	'backbone'
	, 'underscore'
], function(Backbone, _) {

	return Backbone.Model.extend({

		url: 'https://api.github.com/users/cosmicflame/events',

		parse: function(data) {

			var myEvents = []

			_.each(data.slice(0, 10), function(event) {
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
