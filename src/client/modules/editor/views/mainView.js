define(["backbone", "Marionette"], function (backbone, Marionette) {
	var MainView = backbone.Marionette.ItemView.extend({
		template: "<div>TEMPLATE</div>",
		onShow: function () {
			console.log('showing myView');
		}
	});
	
	return MainView;
});
