import { getBranches } from "../../src/api/index";

const expectedBranches = [{ name: "foo" }];
const json = jest.fn().mockReturnValue(expectedBranches);
global.fetch = jest.fn(() => Promise.resolve({ json, status: 200 }));

jest.mock("../../src/api/log-out");

describe("Get Branches", () => {
	it("Calls fetch with expected URL", async () => {
		const expectedAccount = "foobar";
		const expectedRepo = "baz";
		const expectedToken = "qux";
		const branches = await getBranches(
			expectedAccount,
			expectedRepo,
			expectedToken
		);

		expect(global.fetch).toHaveBeenCalledWith(
			`https://api.github.com/repos/${expectedAccount}/${expectedRepo}/branches`,
			{
				headers: {
					Authorization: `token ${expectedToken}`,
				},
			}
		);

		expect(branches).toBe(expectedBranches);
	});
});
