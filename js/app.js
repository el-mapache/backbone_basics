define([ 
	'backbone', 
	'router',
	], function(Backbone, Router) {
		
		return {
    	initialize: function() {						
				Backbone.View.prototype.eventAggregator = _.extend({}, Backbone.Events);
		
				Backbone.history.start();
      }
    };
});