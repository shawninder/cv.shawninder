require([
	"jquery",
	"apps/customizer/Customizer"
], function ($, Customizer) {
	$(function () {
		Customizer.addRegions({
			mainRegion: "#content"
		});
		Customizer.start();
	});
});
