// const fs = require("fs");

// const urlsArr = fs.readFileSync("./lh-urls.csv").toString().split("\n");

module.exports = {
	ci: {
		collect: {
			url: ["https://www.executivecentre.com/"],
			numberOfRuns: 1,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
