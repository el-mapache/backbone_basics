define([
  'backbone'
  ], function(Backbone){
	
	var MyCollection = Backbone.Collection.extend({		
		//set collection model model:,
	
		initialize: function(options) {			
			return this;
		},
		
		url: function() {
			// return url
		}
	
	});
	
	return MyCollection;
});