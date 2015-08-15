var express = require('express');
var path = require('path');
var app = express();

var port = process.ENV.PORT || 8000

app.use(express.static(path.join(__dirname, './client')));

require('./config/routes.js')(app);

app.listen(port, function() {
	console.log('app listening on port' + port);
});