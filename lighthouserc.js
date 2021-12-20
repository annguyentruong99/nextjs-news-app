module.exports = {
	ci: {
		collect: {
			staticDistDir: "./.next",
			isSinglePageApplication: true,
		},
		upload: {
			target: "temporary-public-storage",
		},
	},
};
