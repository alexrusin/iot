var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var _ = require('underscore');
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());



app.use('/', express.static(__dirname + '/public'));

  app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
