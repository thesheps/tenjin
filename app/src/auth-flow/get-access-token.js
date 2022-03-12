export default async function (code) {
	const response = await fetch(
		`https://zt82kmtkwi.execute-api.us-east-1.amazonaws.com/dev?code=${code}`
	);

	return response.json();
}
