var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var test_login = require('./test_login');

app.set('port', (process.env.PORT || 5000));


//var ep_endpoint_add_cart = "https://192.168.1.102:9080/cortex/carts/mobee/default/lineitems/items/mobee/qgqvhklbnruwk3s7onvxk="
var cookie_jar_db = require('./mysql_basics')


// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = cookie_jar_db.eventEmitter;


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


	//update value in the DB
	var deviceId = request.body.deviceId;
	var weight = request.body.weight;

	//cookie_jar_db.updateWeightInDB(weight,deviceId);

	//login

	//add to card

	//get chekout form

	//checkout

	//next();
	test_login.performCheckout({},{},{});
	
});


// for Facebook verification
app.get('/webhook', function (req, res) {
	res.send('Hello world');
})


var server = app.listen(app.get('port'), function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Node app is running on port', app.get('port'));
	console.log("Example app listening at http://%s:%s", host, port)

	//events 
	eventEmitter.on('db_update', function(data){
	   console.log('db_update '+JSON.stringify(data));
	});


});





