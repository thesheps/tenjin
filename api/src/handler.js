"use strict";

module.exports.auth = async (event) => {
	const code = event.queryStringParameters["code"];
	console.log(code);

	return {
		body: { accessToken: code },
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
	};
};
