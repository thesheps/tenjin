"use strict";

module.exports.auth = async (event) => {
	const code = event.queryStringParameters["code"];

	return {
		body: JSON.stringify({ accessToken: code }),
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
	};
};
