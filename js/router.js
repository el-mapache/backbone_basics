define([
	'backbone',
], function(Backbone) {

    var Router = Backbone.Router.extend({
        routes: {
          '': 'index'
					//additional routes here
        },
			
				index: function() {
					//primary routing 
				},
				
				/**
					* Show view calls the appropriate view.  selector passed as second argument to
					* allow for self-rendering views to be passed as well.
				**/
				showView: function(view,selector) {
				    if (this.currentView)
				        this.currentView.close();
	 					if(typeof selector !== 'undefined') {
				    	$(selector).html(view.render().el);
					  } else {
							view.render().el;
						}
				    this.currentView = view;

				    return view;
				}
				
    });

    return new Router;
});
