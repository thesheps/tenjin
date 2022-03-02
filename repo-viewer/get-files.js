export default async function (user, repo) {
	const response = await fetch(
		`https://api.github.com/repos/${user}/${repo}/git/trees/main?recursive=1`
	);

	return response.json().tree;
}
