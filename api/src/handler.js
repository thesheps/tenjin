"use strict";

const axios = require("axios");

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

module.exports.auth = async (event) => {
	const code = event.queryStringParameters["code"];

	const params = {
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		code,
	};

	const output = await axios.get(
		"https://github.com/login/oauth/access_token?",
		{ params }
	);

	return {
		body: JSON.stringify({ accessToken: output }),
		statusCode: 200,
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Credentials": true,
		},
	};
};