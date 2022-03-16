export default async function (user, accessToken) {
	const response = await fetch(`https://api.github.com/users/${user}/repos`, {
		headers: { Authorization: `token ${accessToken}` },
	});

	return response.json();
}
