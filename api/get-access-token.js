import logout from "./log-out.js";

export default async function (code) {
	try {
		const response = await fetch(
			`https://byq42501of.execute-api.eu-west-1.amazonaws.com/dev?code=${code}`
		);

		if (response.status !== 200) throw "Authentication error";

		return await response.json();
	} catch (e) {
		logout();
	}
}
