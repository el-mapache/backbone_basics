define([
	'backbone'
	], function(Backbone) { 

		var BaseView = Backbone.View.extend({
			initialize: function() {
			},
			
			close: function() {
				var self = this;
				if(this.beforeClose)  {
					this.beforeClose();
				}
				
				this.remove();
				this.unbind();
				this.model.unbind();
			}
		});

		return BaseView;
});