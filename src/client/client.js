require([
	"jquery",
	"App",
], function ($, App) {
	$(function () {
		App.addRegions({
			"mainRegion": "#content"
		});
		App.start();
	});
});
