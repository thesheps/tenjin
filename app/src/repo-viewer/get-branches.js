export default async function (user, repo) {
	const response = await fetch(
		`https://api.github.com/repos/${user}/${repo}/branches`
	);

	return response.json();
}
