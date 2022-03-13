import { baseUrl, expectedAccount } from "../testData";

describe("Github Login", () => {
	it("Redirects the user to the correct page", async () => {
		await page.goto(baseUrl);
		await page.type("pierce/input[name=account]", expectedAccount);

		const goButton = await page.$("pierce/#go-button");
		await goButton.click();
		await page.waitForNavigation();

		const url = await page.url();
		expect(url).toBe(`http://${expectedAccount}.localhost:9090/`);
	});
});
