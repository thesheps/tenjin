import { when } from "jest-when";
import { getBranches } from "../../src/api/index";
import logout from "../../src/api/log-out";

const expectedBranches = [{ name: "foo" }];
const expectedAccount = "foobar";
const expectedRepo = "baz";
const expectedToken = "qux";
const expectedUrl = `https://api.github.com/repos/${expectedAccount}/${expectedRepo}/branches`;
const expectedParams = { headers: { Authorization: `token ${expectedToken}` } };
const expectedResponse = () => expectedBranches;
const naughtyAccount = "beans";
const naughtyRepo = "on";
const naughtyToken = "toast";
const naughtyUrl = `https://api.github.com/repos/${naughtyAccount}/${naughtyRepo}/branches`;
const naughtyParams = { headers: { Authorization: `token ${naughtyToken}` } };

global.fetch = jest.fn();

jest.mock("../../src/api/log-out");

when(global.fetch)
	.calledWith(expectedUrl, expectedParams)
	.mockReturnValue(Promise.resolve({ json: expectedResponse, status: 200 }));

when(global.fetch)
	.calledWith(naughtyUrl, naughtyParams)
	.mockReturnValue(Promise.resolve({ status: 418 }));

describe("Get Branches", () => {
	it("Calls fetch with expected URL", async () => {
		const branches = await getBranches(
			expectedAccount,
			expectedRepo,
			expectedToken
		);

		expect(global.fetch).toHaveBeenCalledWith(expectedUrl, expectedParams);
		expect(branches).toBe(expectedBranches);
	});

	it("Handles naughtiness by logging out and redirecting", async () => {
		const branches = await getBranches(
			naughtyAccount,
			naughtyRepo,
			naughtyToken
		);

		expect(global.fetch).toHaveBeenCalledWith(naughtyUrl, naughtyParams);
		expect(branches).toEqual();
		expect(logout).toHaveBeenCalled();
	});
});
