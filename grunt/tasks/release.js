module.exports = function (grunt) {
	'use strict';
	grunt.task.registerTask('release', function (version) {
		version = version ? version : 'patch';
		grunt.task.run(['bump-only:' + version, 'changelog', 'committers', 'bump-commit']);
	});
};

