describe("Landing Page", () => {
	beforeAll(async () => {
		await page.goto(`http://localhost:${process.env.PORT}`);
	});

	it("Has the expected title", async () => {
		const title = await page.title();
		expect(title).toBe("Tenjin");
	});
});
