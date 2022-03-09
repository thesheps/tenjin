import { baseUserUrl } from "../testData";

describe("Github Login", () => {
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
