export default async () => {
	await page.evaluate(() => localStorage.clear());
};
