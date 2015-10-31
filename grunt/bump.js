module.exports = function (grunt, options) {
	return {
		options: {
			files: [
				'package.json'
			],
			updateConfigs: ['pkg'],
			commitFiles: [
				'package.json',
				'AUTHORS.md',
				'CHANGELOG.md'
			],
			commitMessage: 'Release v<%= pkg.version %>',
			push: false
		}
	};
};
