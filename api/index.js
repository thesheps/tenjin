const { auth } = require("./src/handler");

auth({
	queryStringParameters: {
		code: "0b6eb9c8346ffdc7bc1b",
	},
}).then((data) => {
	console.log(data.body);
});
