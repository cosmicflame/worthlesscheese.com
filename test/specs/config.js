; define([
	'config'
	, 'jasmine'
], function(config) {

	describe('Config file', function() {
		it('should have an "app" property', function() {
			expect(config.app).toBeTruthy()
		})

		it('should have an "app.name" property', function() {
			expect(config.app.name).toBeTruthy()
		})

		it('should have an "app.version" property', function() {
			expect(config.app.version).toBeTruthy()
		})
	})
});
