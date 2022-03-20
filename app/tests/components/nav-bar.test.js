const { repoUrl } = require("./testData");
import setupTest from "./setupTest";

describe("Navbar", () => {
	beforeAll(async () => {
		await setupTest(page, repoUrl);
	});

	it("Clears local storage and navigates to the home page on logout", async () => {
		await page.click("pierce/#log-out-button");
		const url = await page.url();

		const tenjnState = await page.evaluate(() =>
			localStorage.getItem("tenjinState")
		);

		expect(url).toBe("http://localhost:9090/");
		expect(tenjnState).toBeNull();
	});

	afterAll(async () => {
		await page.evaluate(() => localStorage.clear());
	});
});
