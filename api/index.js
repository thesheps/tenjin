const { auth } = require("./src/handler");

auth({ queryStringParameters: { code: "8acdf21c67ac3b8a78ff" } }).then((d) => {
	console.log(d.body);
});
