// const fs = require("fs");

// const urlsArr = fs.readFileSync("./lh-urls.csv").toString().split("\n");

module.exports = {
	ci: {
		collect: {
			url: ["http://localhost:3000"],
			startServerCommand: "npm run start",
			isSinglePageApplication: true,
			numberOfRuns: 1,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
