import { baseUrl, baseUserUrl, expectedUsername } from "../testData";

describe("Github Login", () => {
	it("Requires username to be populated", async () => {
		await page.goto(baseUrl);

		const loadButton = await page.$("pierce/#load-button");
		var isDisabled = await page.evaluate((el) => el.disabled, loadButton);
		expect(isDisabled).toBeTruthy();

		await page.type("pierce/input[name=username]", expectedUsername);

		isDisabled = await page.evaluate((el) => el.disabled, loadButton);
		expect(isDisabled).toBeFalsy();
	});

	it("Triggers the loading spinner when you smash that login button", async () => {
		await page.goto(baseUrl);

		const loadButton = await page.$("pierce/#load-button");
		var isLoading = await page.evaluate((el) => el.ariaBusy, loadButton);
		expect(isLoading).toBeFalsy();

		await page.type("pierce/input[name=username]", expectedUsername);
		await loadButton.click();

		isLoading = await page.evaluate((el) => el.ariaBusy, loadButton);
		expect(isLoading).toBeTruthy();
	});

	it("Allows logging in from a subdomain url", async () => {
		await page.goto(baseUserUrl);

		const loadButton = await page.$("pierce/#load-button");
		var isLoading = await page.evaluate((el) => el.ariaBusy, loadButton);
		expect(isLoading).toBeFalsy();

		await loadButton.click();

		isLoading = await page.evaluate((el) => el.ariaBusy, loadButton);
		expect(isLoading).toBeTruthy();
	});
});
