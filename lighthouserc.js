const fs = require("fs");

const urlsArr = fs.readFileSync("./lh-urls.csv").toString().split("\n");

module.exports = {
	ci: {
		collect: {
			url: urlsArr,
			staticDistDir: "./.next",
			isSinglePageApplication: true,
			numberOfRuns: 1,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
