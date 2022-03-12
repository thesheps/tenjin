export default async function (code) {
	const response = await fetch(
		`https://byq42501of.execute-api.eu-west-1.amazonaws.com/dev?code=${code}`
	);

	console.log(response);
	return await response.json();
}
