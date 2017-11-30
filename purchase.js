
var constants = require('./constants');
var bodyParser = require('body-parser')
var request = require('request')


function purchaseCall(headers,data_login,callback_,data){
	console.log("purchaseCall: ");

	// Configure the request
	var options = {
	    url: "",
	    method: 'POST',
	    headers: headers,
	    json: data_login
	};

	console.log("options: "+JSON.stringify(options) +"headers: "+headers);
	if(headers._url){
		options.url = headers._url;
		console.log("url is updated: "+JSON.stringify(options));
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
	        responseToReturn.data = data;
	        responseToReturn.Authorization = headers.Authorization;

	    }else{
	    	console.log(error);
	    	console.log("error occured: "+response.statusCode);
			responseToReturn =  constants.failure;
	    }

	    callback_(responseToReturn)
	});
};

module.exports = {
	purchase: function(headers,data,callback_){

		var headers = {
		    'Authorization': headers.Authorization,
		    'Content-Type': 'application/json',
		    '_url': headers.url
		};
		var data_login= {
			
		};
		purchaseCall(headers,data_login,callback_,data);
	}
};

