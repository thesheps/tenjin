"use strict";

module.exports.auth = async (event) => {
	const code = event.input.queryStringParameters["code"];

	return {
		statusCode: 200,
		body: code,
	};
};
