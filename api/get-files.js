import logout from "./log-out.js";

export default async function (user, repo, branch, accessToken) {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`,
			{
				headers: { Authorization: `token ${accessToken}` },
			}
		);

		const json = await response.json();

		if (response.status !== 200) throw "Authentication error";

		return json.tree.filter((f) => f.path.endsWith(".md"));
	} catch (e) {
		logout();
	}
}
