
var constants = require('./constants');
var bodyParser = require('body-parser')
var request = require('request')


function addItemCall(headers,data_login,callback_){
	//console.log(constants.EP_ENDPOINT+constants.ADD_TO_CART);

	// Configure the request
	var options = {
	    url: constants.EP_ENDPOINT+constants.ADD_TO_CART,
	    method: 'POST',
	    headers: headers,
	    json: data_login
	};

	//console.log("options: "+JSON.stringify(options) +"headers: "+headers);
	if(headers.url){
		options.url = headers.url;
		//console.log("url is updated: "+options);
	}

	// Start the request
	request(options, function (error, response, body) {
		//console.log("response  "+response);
	    if (!error && (response.statusCode == 201 || response.statusCode == 200 || response.statusCode == 203) ) {
	        // Print out the response body
	        //console.log("success");
	        //console.log(body);

	        responseToReturn = constants.success;
	        //jbody = JSON.parse(body);

	        responseToReturn._url = body["_cart"][0]["_order"][0]["_purchaseform"][0]["links"][0]["href"]+"?followlocation";

	        //console.log("responseToReturn: "+responseToReturn._url);

	        responseToReturn =  constants.success;
	        responseToReturn.Authorization = headers.Authorization;

	    }else{
	    	//console.log(error);
	    	//console.log("error occured: "+response.statusCode);
			responseToReturn =  constants.failure;
	    }

	    callback_(responseToReturn)
	});
};

module.exports = {
	addItem: function(headers,data,callback_){

		var headers = {
		    'Authorization': headers.Authorization,
		    'Content-Type': 'application/json'
		};
		var data_login= {
			"quantity": "1"
		};
		addItemCall(headers,data_login,callback_);
	}
};

