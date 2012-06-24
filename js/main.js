require.config({
    paths: {
        jquery:        		'libs/jquery/jquery',
        underscore:    		'libs/underscore/underscore.min',
        backbone:      		'libs/backbone/backbone.min',
        text:          		'libs/require/text.min',
        json2:         		'libs/json/json2',
        templates:     		'../templates'
    }

});

require(['app', 'json2'], function(app) {
 	app.initialize();
});