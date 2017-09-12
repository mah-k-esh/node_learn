
var constants = require('./constants');
var bodyParser = require('body-parser')
var request = require('request')


function fbNotificationCall(headers,data_login,callback_){
	console.log(constants.EP_ENDPOINT+constants.ADD_TO_CART);

	// Configure the request
	var options = {
	    url: constants.EP_ENDPOINT+constants.ADD_TO_CART,
	    method: 'POST',
	    headers: headers,
	    json: data_login
	};

	console.log("options: "+JSON.stringify(options) +"headers: "+headers);
	if(!headers.url){
		options.url = headers.url;
		console.log("url is updated: "+options);
	}

	// Start the request
	request(options, function (error, response, body) {
		console.log("response  "+response);
	    if (!error && (response.statusCode == 201 || response.statusCode == 200 || response.statusCode == 203) ) {
	        // Print out the response body
	        console.log("success");
	        console.log(body);

	        responseToReturn =  constants.success;
	        responseToReturn.body = body;
	        responseToReturn.Authorization = headers.Authorization;

	    }else{
	    	console.log(error);
	    	console.log("error occured: "+response.statusCode);
			responseToReturn =  constants.failure;
			responseToReturn.error = error;
	    }

	    callback_(responseToReturn)
	});
};

module.exports = {
	fbNotification: function(headers,data,callback_){

		var headers = {
		    'Authorization': headers.Authorization,
		    'Content-Type': 'application/json'
		};
		var data_login= {
			"quantity": "1"
		};
		fbNotificationCall(headers,data_login,callback_);
	}
};

