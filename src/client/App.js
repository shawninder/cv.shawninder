define([
	"backbone",
	"Marionette",
	"modules/editor/Editor"
], function (backbone, Marionette, Editor) {
	var App = new backbone.Marionette.Application();
	
	App.module("Editor", Editor);
	
	App.on("initialize:after", function(){
		if (!backbone.history.started){
		  backbone.history.start();
		}
	});
	
	return App;
});
