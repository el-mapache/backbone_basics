define([
	'backbone',
	'views/base_view',
	], function(Backbone, BaseView) {
	
	var MyView = BaseView.extend({		
		initialize: function() {
			
			BaseView.prototype.initialize.apply(this,arguments);
			return this;
		},
		
		render: function() {
			return this;
		}
		
	});
	
	return MyView;
});