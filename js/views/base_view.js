define([
	'backbone'
	], function(Backbone) { 

		var BaseView = Backbone.View.extend({
			initialize: function() {
			//	this.bindings = [];
			},
			
			close: function() {
				var self = this;
				if(this.beforeClose)  {
					this.beforeClose();
				}
				
				console.log('cleanup?');
				console.log(this);
				console.log(this.model);
				this.remove();
				this.unbind();
				this.model.unbind();
			}
		});

		return BaseView;
});