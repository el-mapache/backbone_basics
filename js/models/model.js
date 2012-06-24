define([
	'backbone'
	], function(Backbone) {
	
	var MyModel = Backbone.Model.extend({
		defaults: {
		},
		
		initialize: function() {
			
			return this;
		},
		
	});
	return MyModel;
});