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
						dest: 'builds/dev/public',
						ext: '.css',
						extDot: 'first'
					}
				]
			}
		},
		copy: {
			html: {
				files: [
					{ expand: true, cwd: 'src/client/', src: '*.html', dest: 'builds/dev/public', filter: 'isFile' }
				]
			},
			server: {
				files: [
					{ expand: true, cwd: 'src/server/', src: '*.js', dest: 'builds/dev/', filter: 'isFile' }
				]
			}
		},
		watch: {
			styles: {
				files: 'src/client/*.less',
				tasks: ['less'],
				options: {
					interrupt: true,
					livereload: true
				}
			},
			markup: {
				files: 'src/client/*.html',
				tasks: ['copy:html']
			},
			server: {
				files: 'src/server/*.js',
				tasks: ['copy:server']
			}
		},
		bgShell: {
			_defaults: {
				bg: false
			},
			removeBackups: {
				cmd: "find . -wholename './node_modules' -prune -o -name '*~' -exec rm {} \\;"
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-bg-shell');
	grunt.loadNpmTasks('grunt-contrib-copy');
	
	grunt.registerTask('removeBackups', ['bgShell:removeBackups']);
	grunt.registerTask('build', ['jshint', 'copy', 'less']);
  grunt.registerTask('default', ['watch']);
};
