module.exports = function(grunt) {
	
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	concat: {
	    	compile_angular: {
		    	src: ['public/src/js/app.js', 'public/src/js/**/*.js'],
		    	dest: 'public/dist/js/script.js'
	    	}
    	},
    	copy: {
	    	copy_lib: {
		    	files: [{
			    	expand: true,
					cwd: 'public/src/lib',
				    src: ['**'],
				    dest: 'public/dist/lib/'
				}]
	    	}
    	},
    	htmlmin: {
	    	compile: {
		    	options: {
					removeComments: true,
					collapseWhitespace: true
				},
		    	files: [{
			    	expand: true,
					cwd: 'public/src',
				    src: ['**/*.html'],
				    dest: 'public/dist/'
				}]
	    	}
    	},
    	imagemin: {
	    	compile: {
		    	options: {
			    	optimizationLevel: 3
		    	},
		    	files: [{
			    	expand: true,
			    	cwd: 'public/src/img',
			    	src: ['**/*.{png,jpg,gif}'],
			    	dest: 'public/dist/img/'
			    }]
	    	}
    	},
    	less: {
	    	compile: {
				files: {
					'public/dist/css/style.css' : 'public/src/less/**/*.less'
				}
			}
		},
    	watch: {
	    	html: {
		    	files: ['public/src/**/*.html'],
		    	tasks: ['htmlmin:compile']
	    	},
			img: {
				files: ['public/src/img/**/*.{png,jpg,gif}'],
				tasks: ['imagemin:compile']
			},
	    	js: {
				files: ['public/src/js/**/*.js'],
				tasks: ['concat:compile_angular']
			},
	    	less: {
		    	files: ['public/src/less/**/*.less'],
				tasks: ['less:compile']	
	    	},
    	}
    });
    
    //load tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    //register tasks
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('compile', ['concat', 'copy', 'htmlmin', 'imagemin', 'less']);
    
}