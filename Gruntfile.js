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
		},
		'ftp-deploy': {
		  build: {
			auth: {
			  host: 'ftp.cluster011.ovh.net',
			  port: 21,
			  authPath : process.env.GM_PATH,
			  authKey: 'cookie'
			},
			src: './www',
			dest: './www',
			"exclusions":['./www/**/.DS_Store']
		  }
    	}
	});

    grunt.loadNpmTasks('grunt-jade');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-ftp-deploy');

    // Default task(s).
    grunt.registerTask('default', ['jade','less']);
	grunt.registerTask('deploy', ['ftp-deploy']);
};