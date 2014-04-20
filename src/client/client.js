require([
	"jquery",
	"apps/Customizer"
], function ($, Customizer) {
	$(function () {
		Customizer.addRegions({
			mainRegion: "#content"
		});
	});
});
