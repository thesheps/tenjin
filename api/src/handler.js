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
		const response = await axios.get(
			"https://github.com/login/oauth/access_token?",
			{ params }
		);

		const json = {};
		const vals = response.data.split("&");

		for (let i = 0; i < vals.length; i++) {
			const kvp = vals[i].split("=");
			json[kvp[0]] = kvp[1];
		}

		return {
			headers,
			body: JSON.stringify(json),
			statusCode: 200,
		};
	} catch (e) {
		return {
			headers,
			body: "Couldn't obtain access token!",
			statusCode: 403,
		};
	}
};
