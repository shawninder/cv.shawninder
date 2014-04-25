define(["modules/editor/controller"], function (editorController) {
	return function (Editor, App, backbone, Marionette, $, _) {
		Editor.addInitializer(function(){
        Editor.controller = new editorController({
            region: App.mainRegion
        });
        Editor.controller.show();
    });
		Editor.on("initialize:after", function(){
			if(!backbone.history.started){
				backbone.history.start();
			}
		});
	};
});
