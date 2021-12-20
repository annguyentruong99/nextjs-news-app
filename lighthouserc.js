module.exports = {
	ci: {
		collect: {
			staticDistDir: "./.next",
			isSinglePageApplication: true,
			numberOfRuns: 1,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
