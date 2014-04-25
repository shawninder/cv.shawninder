define(["backbone", "Marionette", "modules/editor/views/mainView"], function (backbone, Marionette, MainView) {
	var EditorController = backbone.Marionette.Controller.extend({
		initialize: function(options){
        this.region = options.region
    },
		show: function () {
      var view = new MainView({ content: "YES" });
      
      this.region.show(view);
		}
	});
	
	return EditorController;
});
