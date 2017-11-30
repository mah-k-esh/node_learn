var test_login = require('./test_login');

function delay(t, val) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            
            resolve(val);
            console.log("inside delay function");
        }, t);
    });
}

function increment5(val) {
    console.log("inside increment5");
    return val + 5;
}

delay(1000, 1).then(increment5).then(function(val) {
	console.log("inside second then");
    return val - 3;
}).then(function(final) {
	console.log("insdie last then");
    console.log(final);
});


function test(){
	return new Promise( test_login.performCheckout({},{},{}) );
	console.log("after that happens");
}

test();