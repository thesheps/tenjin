import getFiles from "../../../src/components/file-lister/get-files";

const expectedFiles = [{ path: "foo" }];
const json = jest.fn().mockReturnValue({ tree: expectedFiles });
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Files", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedAccount = "foobar";
		const expectedRepo = "baz";
		const expectedBranch = "baz";
		const expectedToken = "qux";
		const files = await getFiles(
			expectedAccount,
			expectedRepo,
			expectedBranch,
			expectedToken
		);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedAccount}/${expectedRepo}/git/trees/${expectedBranch}?recursive=1`,
			{
				headers: {
					Authorization: `token ${expectedToken}`,
				},
			}
		);

		expect(files).toEqual(["foo"]);
	});
});
