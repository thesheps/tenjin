describe("Landing Page", () => {
	beforeAll(async () => {
		await page.goto(`http://localhost:${process.env.PORT}`);
	});

	it("Has the expected title", async () => {
		const title = await page.title();
		expect(title).toBe("Tenjin");
	});

	it("Has the expected splash message", async () => {
		const element = await page.$(".splash");
		const text = await page.evaluate((element) => element.textContent, element);
		expect(text).toBe("Tenjin.");
	});
});
