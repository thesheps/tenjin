export default async function (user, repo, accessToken) {
	const response = await fetch(
		`https://api.github.com/repos/${user}/${repo}/branches`,
		{
			headers: { Authorization: `token ${accessToken}` },
		}
	);

	return response.json();
}
