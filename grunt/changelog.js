module.exports = function () {
	return {
		release: {
			options: {
				version: '<%= pkg.version %>',
				changelog: 'CHANGELOG.md'
			}
		}
	};
};
