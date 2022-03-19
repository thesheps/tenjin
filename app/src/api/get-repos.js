import logout from "./log-out.js";

export default async function (user, accessToken) {
	try {
		const response = await fetch(`https://api.github.com/users/${user}/repos`, {
			headers: { Authorization: `token ${accessToken}` },
		});

		if (response.status !== 200) throw "Authentication error";

		return response.json();
	} catch (e) {
		logout();
	}
}
