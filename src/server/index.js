var express = require('express'),
	app = express(),
	config = require('./config.js'),
	routes = require('./routes.js'),
	staticFileFolder = __dirname + '/../../build';

app.use(express.static(staticFileFolder));

routes.setup(app);

app.listen(config.httpPort);
console.log("Listening on port ", config.httpPort);
