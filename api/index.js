const { auth } = require("./src/handler");

auth({ queryStringParameters: { code: "beans" } }).then((data) => {
	console.log(data.body);
});
