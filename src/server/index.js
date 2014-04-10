var express = require('express'),
	app = express(),
	config = require('./config.js'),
	routes = require('./routes.js');

routes.setup(app);

app.listen(config.httpPort);
console.log("Listening on port ", config.httpPort);
