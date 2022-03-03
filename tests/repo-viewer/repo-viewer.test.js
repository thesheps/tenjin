describe("Repo Viewer", () => {
	const username = "testUsername";
	const expectedRepo = { name: "my-lovely-repo" };
	const repoUrl = `https://api.github.com/users/${username}/repos`;

	beforeAll(async () => {
		await page.goto(
			`http://localhost:${process.env.PORT}/${username}/${expectedRepo.name}`
		);

		page.setRequestInterception(true);
		page.on("request", (request) => {
			if (request.url() == repoUrl) {
				request.respond({
					headers: { "Access-Control-Allow-Origin": "*" },
					body: JSON.stringify([expectedRepo]),
				});
			} else {
				request.continue();
			}
		});
	});
});
