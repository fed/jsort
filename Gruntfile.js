module.exports = function(grunt) {
	'use strict';
	var options = {
		data: {
			pkg: grunt.file.readJSON('package.json')
		},
		init: true,
		loadGruntTasks: {
			pattern: 'grunt-!(cli)*'
		}
	};
	grunt.loadTasks('grunt/tasks');
	require('load-grunt-config')(grunt, options);
};
