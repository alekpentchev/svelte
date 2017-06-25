// this file will replace all the expected.js and expected-bundle.js files with
// their _actual equivalents. Only use it when you're sure that you haven't
// broken anything!
const fs = require("fs");
const glob = require("glob");

glob.sync("samples/*/_actual.json", { cwd: __dirname }).forEach(file => {
	const actual = fs.readFileSync(`${__dirname}/${file}`, "utf-8");
	fs.writeFileSync(
		`${__dirname}/${file.replace("_actual", "output")}`,
		actual
	);
});
