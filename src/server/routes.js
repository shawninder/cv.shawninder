exports.setup = function (app) {
	app.get('/', function (req, res) {
		res.send("query: " + req.query);
	});
};
