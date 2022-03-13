const axios = require("axios");
const { auth } = require("../src/handler");

process.env.CLIENT_ID = "CLIENT_ID";
process.env.CLIENT_SECRET = "CLIENT_SECRET";

const testEvent = { queryStringParameters: { code: "foobarbaz" } };
const expectedUrl = "https://github.com/login/oauth/access_token?";
const expectedParams = {
	params: {
		client_id: process.env.CLIENT_ID,
		client_secret: process.env.CLIENT_SECRET,
		code: "foobarbaz",
	},
};

const expectedOutput = {
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Credentials": true,
	},
	body: '{"accessToken":"qux"}',
	statusCode: 200,
};

jest.mock("axios", () => ({
	get: jest.fn().mockReturnValue(Promise.resolve({ data: "accessToken=qux" })),
}));

describe("Auth Handler", () => {
	it("Returns a valid access token using the correct client details", async () => {
		const output = await auth(testEvent);

		expect(axios.get).toHaveBeenCalledWith(expectedUrl, expectedParams);
		expect(output).toEqual(expectedOutput);
	});
});
