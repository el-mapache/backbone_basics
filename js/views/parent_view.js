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
				console.log('beforeClose called');
				if(this.childViews) {
					console.log('number of child views');
					console.log(this.childViews.length);
					_(this.childViews).each(function(child) {
						console.log('there is a child view');
						child.close();
					});
				}
			}
		});

		return ParentView;
});