export default async function (user, repo, branch, accessToken) {
	const response = await fetch(
		`https://api.github.com/repos/${user}/${repo}/git/trees/${branch}?recursive=1`,
		{
			headers: { Authorization: `token ${accessToken}` },
		}
	);

	const json = await response.json();

	return json.tree.filter((f) => f.path.endsWith(".md")).map((f) => f.path);
}
