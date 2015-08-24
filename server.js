var express = require('express');
var path = require('path');
var app = express();

var port = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, './client')));

require('./config/mongoose.js');
require('./config/routes.js')(app);

app.listen(port, function() {
	console.log('app listening on port' + port);
});