"use strict";

module.exports.auth = async (event) => {
	const code = event.input.queryStringParameters["code"];

	return {
		body: code,
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
	};
};
