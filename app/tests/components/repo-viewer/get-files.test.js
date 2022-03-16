import getFiles from "../../../src/components/repo-viewer/get-files";

const expectedFiles = [{ path: "foo" }];
const json = jest.fn().mockReturnValue({ tree: expectedFiles });
global.fetch = jest.fn(() => Promise.resolve({ json }));

describe("Get Files", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedAccount = "foobar";
		const expectedRepo = "baz";
		const expectedToken = "qux";
		const files = await getFiles(expectedAccount, expectedRepo, expectedToken);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedAccount}/${expectedRepo}/git/trees/main?recursive=1`,
			{
				headers: {
					Authorization: `token ${expectedToken}`,
				},
			}
		);

		expect(files).toBe(expectedFiles);
	});
});
