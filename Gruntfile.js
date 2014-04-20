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
				devel: true,
				
				predef: ['require']
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
					{ expand: true, cwd: 'src/client/', src: '*.html', dest: 'builds/dev/public/', filter: 'isFile' }
				]
			},
			lib: {
				files: [
					{ expand: true, cwd: 'src/lib/', src: '*.js', dest: 'builds/dev/public/', filter: 'isFile' }
				]
			},
			server: {
				files: [
					{ expand: true, cwd: 'src/server/', src: '*.js', dest: 'builds/dev/', filter: 'isFile' }
				]
			},
			client: {
				files: [
					{ expand: true, cwd: 'src/client/', src: '**/*.js', dest: 'builds/dev/public/', filter: 'isFile' }
				]
			}
		},
		watch: {
			options: {
				interrupt: true,
				event: ['all']
			},
			styles: {
				files: 'src/client/*.less',
				tasks: ['less']
			},
			markup: {
				files: 'src/client/*.html',
				tasks: ['copy:html']
			},
			lib: {
				files: 'src/lib/*.js',
				tasks: ['copy:lib']
			},
			server: {
				files: 'src/server/*.js',
				tasks: ['copy:server']
			},
			client: {
				files: 'src/client/**/*.js',
				tasks: ['copy:client']
			},
			staticFiles: {
				files: 'builds/dev/public/*',
				options: {
					livereload: true
				}
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
	
	grunt.registerTask('rm~', ['bgShell:removeBackups']);
	grunt.registerTask('build', ['jshint', 'less', 'copy']);
  grunt.registerTask('default', ['watch']);
};
