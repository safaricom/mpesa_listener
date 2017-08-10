var prettyjson = require('prettyjson');

var options = {
	noColor: true
};

var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
	B2C ResultURL
	URL: /b2c/result
*/
app.post('/b2c/result', function(req, res) {
	console.log('-----------B2C CALLBACK------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	var message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

/*
	B2C QueueTimeoutURL
	URL: /b2c/timeout
*/
app.post('/b2c/timeout', function(req, res) {
	console.log('-----------B2C TIMEOUT------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	var message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

/*
	C2B ValidationURL
	URL: /c2b/validation
*/
app.post('/c2b/validation', function(req, res) {
	console.log('-----------C2B VALIDATION REQUEST-----------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	var message = {
		"ResultCode": 0,
		"ResultDesc": "Success",
		"ThirdPartyTransID": "1234567890"
	};

	res.json(message);
});

/*
	C2B ConfirmationURL
	URL: /c2b/confirmation
*/
app.post('/c2b/confirmation', function(req, res) {
	console.log('-----------C2B CONFIRMATION REQUEST------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	var message = {
		"ResultCode": 0,
		"ResultDesc": "Success"
	};


	res.json(message);
});

/*
	B2B ResultURL
	URL: /b2b/result
*/
app.post('/b2b/result', function(req, res) {
	console.log('-----------B2B CALLBACK------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	var message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

/*
	B2B QueueTimeoutURL
	URL: /api/v1/b2b/timeout
*/
app.post('/b2b/timeout', function(req, res) {
	console.log('-----------B2B TIMEOUT------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	var message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

var server = app.listen(8310, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("M-Pesa Listener is listening at http://%s:%s", host, port)
});
