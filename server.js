var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, './client')));

require('./config/routes.js')(app);

app.listen(8000, function() {
	console.log('app listening on port 8000');
});