exports.setup = function (app) {
	app.get('/', function (req, res) {
		res.sendfile('index.html');
	});
	app.use('*', function (req, res) {
		res.status(404).send('404');
	});
};
