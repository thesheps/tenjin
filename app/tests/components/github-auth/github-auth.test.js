import { baseUrl, expectedAccount } from "../testData";

describe("Github Auth", () => {
	it("Redirects the user to the correct page", async () => {
		await page.goto(baseUrl);
		await page.type("pierce/input[name=account]", expectedAccount);

		const goButton = await page.$("pierce/#go-button");
		await goButton.click();

		const url = await page.url();
		expect(url).toEqual("http://localhost:9090/");
	});
});
