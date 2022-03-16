export default async function (user, repo, accessToken) {
	const response = await fetch(
		`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`,
		{
			headers: { Authorization: `token ${accessToken}` },
		}
	);

	return response.json().tree;
}
