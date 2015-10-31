module.exports = function (grunt, options) {
	return {
		release: {
			options: {
				version: '<%= pkg.version %>',
				changelog: 'CHANGELOG.md'
			}
		}
	};
};
