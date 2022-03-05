import { baseUrl, expectedUsername } from "../testData";

describe("Github Login", () => {
	beforeEach(async () => {
		await page.goto(baseUrl);
	});

	it("Requires both fields to be populated", async () => {
		const loginButton = await page.$("pierce/#login-button");
		var isDisabled = await page.evaluate((el) => el.disabled, loginButton);
		expect(isDisabled).toBeTruthy();

		await page.type("pierce/input[name=username]", expectedUsername);

		isDisabled = await page.evaluate((el) => el.disabled, loginButton);
		expect(isDisabled).toBeFalsy();
	});

	it("Triggers the loading spinner when you smash that login button", async () => {
		const loginButton = await page.$("pierce/#login-button");
		var isLoading = await page.evaluate((el) => el.ariaBusy, loginButton);
		expect(isLoading).toBeFalsy();

		await page.type("pierce/input[name=username]", expectedUsername);
		await loginButton.click();

		isLoading = await page.evaluate((el) => el.ariaBusy, loginButton);
		expect(isLoading).toBeTruthy();
	});
});
