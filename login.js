var constants = require('./constants');
var bodyParser = require('body-parser')
var request = require('request')


function loginCall(headers,data_login,callback_){
	//console.log(constants.EP_ENDPOINT);

	// Configure the request
	var options = {
	    url: constants.EP_ENDPOINT+constants.EP_LOGIN,
	    method: 'POST',
	    headers: headers,
	    form: data_login
	}

	var responseToReturn = "";

	// Start the request
	request(options, function (error, response, body) {
	    if (!error && response.statusCode == 200) {
	        // Print out the response body
	        //console.log("success");
	        //console.log(body);

	        jbody = JSON.parse(body);
	        token = jbody.access_token;
	        token_type = jbody.token_type;

	        //console.log("access_token "+token);
	        //console.log("token_type "+token_type);

	        //console.log(token_type+" "+token);

			responseToReturn =  constants.success;
			responseToReturn.body = jbody;
			responseToReturn.Authorization = token_type+" "+token;

	    }else{
	    	//console.log(error);
	    	//console.log("error occured");
	    	responseToReturn =  constants.failure;
	    }

	    callback_(responseToReturn);
	    return;
	});
};

// function callback_(parameter){
// 	//console.log("login.js: callback_: "+JSON.stringify(parameter));
// 	if(parameter.state == "success")
// 	{
// 		//console.log(parameter);
// 	}else{
// 		//console.log("something happened cannot continue");
// 	}

// }

module.exports = {
	login: function(headers,data,callback_){

		var headers = {
		    //'Authorization': '',
		    'Content-Type': 'application/json'
		};
		var data_login= {
			"grant_type":"password",
			"username":"oliver.harris@elasticpath.com",
			"password":"password",
			"scope":"mobee",
			"role":"REGISTERED"
		};
		loginCall(headers,data_login,callback_);
	}
};

