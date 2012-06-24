define([
	'backbone',
	'views/base_view'
	], function(Backbone,BaseView) { 

		var ParentView = BaseView.extend({
			initialize: function() {
				BaseView.prototype.initialize.apply(this,arguments);
				this.childViews = [];
			},
			
			beforeClose: function() {
				if(this.childViews) {
					_(this.childViews).each(function(child) {
						child.close();
					});
				}
			}
			
		});

		return ParentView;
});