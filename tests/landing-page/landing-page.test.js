const { baseUrl, baseUserUrl, expectedUsername } = require("../testData");

describe("Landing Page", () => {
	beforeAll(async () => {
		await page.goto(baseUrl);
	});

	it("Has the expected title", async () => {
		const title = await page.title();
		expect(title).toBe("Tenjin");
	});

	it("Has the expected splash message", async () => {
		const navbar = await page.$("pierce/#splash");
		const text = await page.evaluate((el) => el.textContent, navbar);

		expect(text).toMatch("Welcome to Tenjin!");
	});

	it("Has the navbar component", async () => {
		const navbar = await page.$("pierce/#nav-bar");
		expect(navbar).toBeTruthy();
	});

	it("Has the github login component", async () => {
		const githubLogin = await page.$("pierce/#github-login");
		expect(githubLogin).toBeTruthy();
	});

	it("Has the repo lister component", async () => {
		const repoLister = await page.$("pierce/#repo-lister");
		expect(repoLister).toBeTruthy();
	});

	it("Parses a username from the subdomain if presented", async () => {
		await page.goto(baseUserUrl);

		const usernameInput = await page.$("pierce/input[name=username]");
		const username = await page.evaluate((el) => el.value, usernameInput);

		expect(username).toBe(expectedUsername);
	});
});
