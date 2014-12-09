module.exports = function (grunt) {
    'use strict';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		jade: {
		  html: {
			files: {
			  'www/': ['content/*.jade']
			},
			options: {
				client: false,
				compileDebug: true
			}
		  }
		},
		less: {
		  production: {
			options: {
			  paths: ["less"],
			  cleancss: true
			},
			files: {
			  "www/styles/style.css": "less/style.less"
			}
		  }
		}
		
    });

    grunt.loadNpmTasks('grunt-jade');
	grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', ['jade','less']);
};
