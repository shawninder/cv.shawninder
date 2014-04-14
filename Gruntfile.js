module.exports = function (grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: { // see http://www.jshint.com/docs/options/
				// enforcing
				bitwise: true,
				camelcase: true,
				curly: true,
				eqeqeq: true,
				es3: true,
				forin: true,
				freeze: true,
				immed: true,
				indent: 2,
				latedef: true,
				newcap: true,
				noarg: true,
				noempty: true,
				nonbsp: true,
				nonew: true,
				plusplus: true,
				undef: true,
				unused: "vars",
				trailing: true,
				maxparams: 3,
				// relaxing
				laxcomma: true,
				// environment
				devel: true
			},
			gruntfile: {
				src: 'Gruntfile.js',
				options: {
					node: true
				}
			},
			serverSide: {
				src: ['src/server/*.js'],
				options: {
					node: true
				}
			},
			clientSide: {
				src: ['src/client/*.js'],
				options: {
					browser: true,
					jquery: true
				}
			}
		},
		less: {
			dev: {
				files: [
					{
						expand: true,
						cwd: 'src/client/',
						src: ['*.less'],
						dest: 'builds/dev',
						ext: '.css',
						extDot: 'first'
					}
				]
			}
		},
		watch: {
			scripts: {
				files: 'src/**/*.js',
				tasks: ['jshint'],
				options: {
					interrupt: true
				}
			},
			styles: {
				files: 'src/**/*.less',
				tasks: ['less'],
				options: {
					interrupt: true,
					livereload: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	
  grunt.registerTask('default', ['watch']);
};
