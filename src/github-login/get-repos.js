export default async function (user) {
	const response = await fetch(`https://api.github.com/users/${user}/repos`);
	return response.json();
}
