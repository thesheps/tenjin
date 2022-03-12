"use strict";

const axios = require("axios");

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const headers = {
	"Access-Control-Allow-Origin": "*",
	"Access-Control-Allow-Credentials": true,
};

module.exports.auth = async (event) => {
	const code = event.queryStringParameters["code"];
	const params = { client_id, client_secret, code };

	try {
		const response = await axios.post(
			"https://github.com/login/oauth/access_token?",
			null,
			{ params }
		);

		const accessToken = response;
		console.log(accessToken);

		return {
			...headers,
			body: JSON.stringify(accessToken),
			statusCode: 200,
		};
	} catch (e) {
		return {
			...headers,
			body: "Couldn't obtain access token!",
			statusCode: 403,
		};
	}
};
