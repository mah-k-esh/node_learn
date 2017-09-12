
var constants = require('./constants');
var bodyParser = require('body-parser')
var request = require('request')


function itemLookupCall(headers,data_login,callback_){
	console.log(constants.EP_ENDPOINT+constants.LOOK_UP);

	// Configure the request
	var options = {
	    url: constants.EP_ENDPOINT+constants.LOOK_UP,
	    method: 'POST',
	    headers: headers,
	    form: data_login
	}

	// Start the request
	request(options, function (error, response, body) {
	    if (!error && !response && response.statusCode == 201 || response.statusCode == 200 || response.statusCode == 203 ) {
	        // Print out the response body
	        console.log("itemLookupCall success");
	        console.log(body);

	        jbody = JSON.parse(body);

	        responseToReturn =  constants.success;
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
	itemLookup: function(headers,data,callback_){

		var headers = {
		    'Authorization': headers.Authorization,
		    'Content-Type': 'application/json'
		};
		var data_login= {
			"code": constants.DEFAULT_ITEM
		};
		console.log("itemLookup: "+JSON.stringify(headers)+"  "+JSON.stringify(data_login));
		itemLookupCall(headers,data_login,callback_);
	}
};

