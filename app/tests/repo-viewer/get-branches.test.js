import getBranches from "../../src/components/repo-viewer/get-branches";

const expectedBranches = [{ name: "foo" }];
const json = jest.fn().mockReturnValue(expectedBranches);
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Branches", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedAccount = "foobar";
		const expectedRepo = "baz";
		const branches = await getBranches(expectedAccount, expectedRepo);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedAccount}/${expectedRepo}/branches`
		);

		expect(branches).toBe(expectedBranches);
	});
});
