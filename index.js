var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.set('port', (process.env.PORT || 5000));

//app.use(express.static(__dirname + '/public'));

// views is directory for all template files
//app.set('views', __dirname + '/views');
//app.set('view engine', 'ejs');

app.use(bodyParser.json())

app.get('/', function(request, response) {
  response.send('Heal the world');
});

app.get('/test', function(request, response) {
  response.json({speech : "Hey hello"});
});

app.post('/updateWeight', function(request, response) {
	console.log(request.body);
	response.json(request.body);
	//next();
	
});


var server = app.listen(app.get('port'), function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Node app is running on port', app.get('port'));
	console.log("Example app listening at http://%s:%s", host, port)
});


