const prettyjson = require('prettyjson');

const options = {
	noColor: true
};

const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
	B2C ResultURL
	URL: /b2c/result
*/
app.post('/b2c/result', (req, res) => {
	console.log('-----------B2C CALLBACK------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	let message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

/*
	B2C QueueTimeoutURL
	URL: /b2c/timeout
*/
app.post('/b2c/timeout', (req, res) => {
	console.log('-----------B2C TIMEOUT------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	let message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

/*
	C2B ValidationURL
	URL: /c2b/validation
*/
app.post('/c2b/validation', (req, res) => {
	console.log('-----------C2B VALIDATION REQUEST-----------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	let message = {
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
app.post('/c2b/confirmation', (req, res) => {
	console.log('-----------C2B CONFIRMATION REQUEST------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	let message = {
		"ResultCode": 0,
		"ResultDesc": "Success"
	};


	res.json(message);
});

/*
	B2B ResultURL
	URL: /b2b/result
*/
app.post('/b2b/result', (req, res) => {
	console.log('-----------B2B CALLBACK------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	let message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

/*
	B2B QueueTimeoutURL
	URL: /api/v1/b2b/timeout
*/
app.post('/b2b/timeout', (req, res) => {
	console.log('-----------B2B TIMEOUT------------');
	console.log(prettyjson.render(req.body, options));
	console.log('-----------------------');

	let message = {
		"ResponseCode": "00000000",
		"ResponseDesc": "success"
	};

	res.json(message);
});

const server = app.listen(8310, () => {
  let host = server.address().address;
  let port = server.address().port;

	console.log(`M-Pesa Listener is listening at http://${host}:${port}` );
});
