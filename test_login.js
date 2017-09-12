var login = require('./login');
var addToCart = require("./add_to_cart");
var lookup = require("./lookup");
var purchase = require("./purchase");


function purchaseCallBack(parameter){
	if(parameter.state == "success"){
		console.log("purchaseCallBack: "+JSON.stringify(parameter));

	}else{
		console.log("purchaseCallBack: something happened cannot continue"+parameter);
	}
};


function lookupCallBack(parameter){
	if(parameter.state == "success"){
		console.log("lookupCallBack: "+parameter);
		var headers = {};
		headers.Authorization = parameter.Authorization;
		addToCart.addItem(headers,{},lookupCallBack);
	}else{
		console.log("lookupCallBack: something happened cannot continue"+parameter);

	}
};

function fbNotificationCallBack(parameter){
	if(parameter.state == "success"){
		console.log("lookupCallBack: "+JSON.stringify(parameter));
		var headers = {};
		headers.Authorization = parameter.Authorization;
		addToCart.addItem(headers,{},lookupCallBack);
	}else{
		console.log("lookupCallBack: something happened cannot continue"+parameter);

	}
};



function addToCartCallBack(parameter){
	if(parameter.state == "success"){
		console.log("addToCartCallBack: "+JSON.stringify(parameter));


		var headers = {};
		headers.Authorization = parameter.Authorization;
		headers.url = parameter._url;
		purchase.purchase(headers,{},purchaseCallBack);

	}else{
		console.log("addToCartCallBack: something happened cannot continue"+parameter);

	}
};

function loginCallBack(parameter){
	console.log("loginCallBack "+JSON.stringify(parameter));

	if(parameter.state == "success")
	{
		console.log("loginCallBack: "+JSON.stringify(parameter.body));
		var headers = {};
		headers.Authorization = parameter.Authorization;
		addToCart.addItem(headers,{},addToCartCallBack);
	}else{
		console.log("something happened cannot continue");
	}
};

login.login({},{},loginCallBack);


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

