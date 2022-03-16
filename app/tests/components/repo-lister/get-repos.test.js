import getRepos from "../../../src/components/repo-lister/get-repos";

const json = jest.fn();
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Repos", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedAccount = "foobar";
		const expectedToken = "baz";
		await getRepos(expectedAccount, expectedToken);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/users/${expectedAccount}/repos`,
			{
				headers: {
					Authorization: `token ${expectedToken}`,
				},
			}
		);

		expect(json).toHaveBeenCalled();
	});
});
