// Generated on 2015-05-23 using generator-angular 0.9.8
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.loadNpmTasks('grunt-html2js');

  // Configurable paths for the application
  var appConfig = {
	app: require('./bower.json').appPath || 'app',
	dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

	// Project settings
	yeoman: appConfig,

	html2js: {
		options: {
			rename: function (moduleName) {
				return moduleName.replace(/\.\.\/app\//, '');
			}
		},
		main: {
			src: ['app/views/**/*.html'],
			dest: '.tmp/templates.js'
		}
	},

	// Watches files for changes and runs tasks based on the changed files
	watch: {
	  bower: {
		files: ['bower.json'],
		tasks: ['wiredep']
	  },
	  js: {
		files: ['<%= yeoman.app %>/scripts/{,*/}*.js'],
		tasks: ['newer:jshint:all'],
		options: {
		  livereload: '<%= connect.options.livereload %>'
		}
	  },
	  compass: {
		files: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
		tasks: ['compass:server', 'autoprefixer']
	  },
	  html2js: {
		files: ['<%= yeoman.app %>/views/{,*/}*.html'],
		tasks: ['html2js']
	  },
	  gruntfile: {
		files: ['Gruntfile.js']
	  },
	  livereload: {
		options: {
		  livereload: '<%= connect.options.livereload %>'
		},
		files: [
		  '<%= yeoman.app %>/{,*/}*.html',
		  '<%= yeoman.app %>/styles/{,*/}*.css',
		  '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
		]
	  }
	},

	// The actual grunt server settings
	connect: {
	  options: {
		port: 3000,
		// Change this to '0.0.0.0' to access the server from outside.
		hostname: 'localhost',
		livereload: 35729,
		base: "app"
	  },
	  livereload: {
		options: {
		  open: true
		}
	  },
	  dist: {
		options: {
		  open: true,
		  base: '<%= yeoman.dist %>'
		}
	  }
	},

	// Make sure code styles are up to par and there are no obvious mistakes
	jshint: {
	  options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	  },
	  all: {
		src: [
		  'Gruntfile.js',
		  '<%= yeoman.app %>/scripts/{,*/}*.js'
		]
	  }
	},

	// Empties folders to start fresh
	clean: {
	  dist: {
		files: [{
		  dot: true,
		  src: [
			'.tmp',
			'<%= yeoman.dist %>/{,*/}*',
			'!<%= yeoman.dist %>/.git*'
		  ]
		}]
	  },
	  server: '.tmp'
	},

	// Add vendor prefixed styles
	autoprefixer: {
	  options: {
		browsers: ['last 1 version']
	  },
	  dist: {
		files: [{
		  expand: true,
		  cwd: '.tmp/styles/',
		  src: '{,*/}*.css',
		  dest: '.tmp/styles/'
		}]
	  }
	},

	// Automatically inject Bower components into the app
	wiredep: {
	  app: {
		src: ['<%= yeoman.app %>/index.html'],
		ignorePath:  /\.\.\//
	  },
	  sass: {
		src: ['<%= yeoman.app %>/styles/{,*/}*.{scss,sass}'],
		ignorePath: /(\.\.\/){1,2}bower_components\//
	  }
	},

	// Compiles Sass to CSS and generates necessary files if requested
	compass: {
	  options: {
		sassDir: '<%= yeoman.app %>/styles',
		cssDir: '<%= yeoman.app %>/styles',
		generatedImagesDir: '.tmp/images/generated',
		imagesDir: '<%= yeoman.app %>/images',
		javascriptsDir: '<%= yeoman.app %>/scripts',
		fontsDir: '<%= yeoman.app %>/styles/fonts',
		importPath: './bower_components',
		httpImagesPath: '/images',
		httpGeneratedImagesPath: '/images/generated',
		httpFontsPath: '/styles/fonts',
		relativeAssets: false,
		assetCacheBuster: false,
		raw: 'Sass::Script::Number.precision = 10\n'
	  },
	  dist: {
		options: {
		  generatedImagesDir: '<%= yeoman.dist %>/images/generated'
		}
	  },
	  server: {
		options: {
		  debugInfo: true
		}
	  }
	},

	// Renames files for browser caching purposes
	filerev: {
	  dist: {
		src: [
		  '<%= yeoman.dist %>/scripts/{,*/}*.js',
		  '<%= yeoman.dist %>/styles/{,*/}*.css',
		  '<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
		  '<%= yeoman.dist %>/styles/fonts/*'
		]
	  }
	},

	// Reads HTML for usemin blocks to enable smart builds that automatically
	// concat, minify and revision files. Creates configurations in memory so
	// additional tasks can operate on them
	useminPrepare: {
	  html: '<%= yeoman.app %>/index.html',
	  options: {
		dest: '<%= yeoman.dist %>',
		flow: {
		  html: {
			steps: {
			  js: ['concat', 'uglifyjs'],
			  css: ['cssmin']
			},
			post: {}
		  }
		}
	  }
	},

	// Performs rewrites based on filerev and the useminPrepare configuration
	usemin: {
	  html: ['<%= yeoman.dist %>/{,*/}*.html'],
	  css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
	  js: '<%= yeoman.dist %>/**/*.js',
	  options: {
		assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images'],
		patterns: {
		  js: [
			[/([a-zA-Z0-9]{0,}\.png)/, 'Replacing reference to image.png']
		  ]
		}
	  }
	},

	svgmin: {
	  dist: {
		files: [{
		  expand: true,
		  cwd: '<%= yeoman.app %>/images',
		  src: '{,*/}*.svg',
		  dest: '<%= yeoman.dist %>/images'
		}]
	  }
	},

	htmlmin: {
	  dist: {
		options: {
		  collapseWhitespace: true,
		  conservativeCollapse: true,
		  collapseBooleanAttributes: true,
		  removeCommentsFromCDATA: true,
		  removeOptionalTags: true
		},
		files: [{
		  expand: true,
		  cwd: '<%= yeoman.dist %>',
		  src: ['*.html', 'views/{,*/}*.html'],
		  dest: '<%= yeoman.dist %>'
		}]
	  }
	},

	// ng-annotate tries to make the code safe for minification automatically
	// by using the Angular long form for dependency injection.
	ngAnnotate: {
	  dist: {
		files: [{
		  expand: true,
		  cwd: '.tmp/concat/scripts',
		  src: ['*.js', '!oldieshim.js'],
		  dest: '.tmp/concat/scripts'
		}]
	  }
	},

	// Replace Google CDN references
	cdnify: {
	  dist: {
		html: ['<%= yeoman.dist %>/*.html']
	  }
	},

	// Copies remaining files to places other tasks can use
	copy: {
	  spring: {
		files: [{
			expand: true,
			cwd: '<%= yeoman.dist %>',
			dest: '../src/main/webapp/WEB-INF/assets',
			src: ['{,*/**/}*.*']
		}]
	  },
	  dist: {
		files: [{
		  expand: true,
		  dot: true,
		  cwd: '<%= yeoman.app %>',
		  dest: '<%= yeoman.dist %>',
		  src: [
			'*.{ico,png,txt}',
			'.htaccess',
			'*.html',
			'views/{,*/}*.html',
			'images/{,*/}*.{webp}',
			'fonts/{,*/}*.*',
		  'translations/{,*/}*.json'
		  ]
		}, {
		  expand: true,
		  cwd: '.tmp/images',
		  dest: '<%= yeoman.dist %>/images',
		  src: ['generated/*']
		}, {
		  expand: true,
		  cwd: '.',
		  src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
		  dest: '<%= yeoman.dist %>'
		}]
	  },
	  styles: {
		expand: true,
		cwd: '<%= yeoman.app %>/styles',
		dest: '.tmp/styles/',
		src: '{,*/}*.css'
	  }
	},

	// Run some tasks in parallel to speed up the build process
	concurrent: {
	  server: [
		'html2js',
		'compass:server'
	  ],
	  test: [
		'compass'
	  ],
	  dist: [
		'compass:dist',
		/*'imagemin',*/
		'svgmin',
		'html2js'
	  ]
	}

  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
	if (target === 'dist') {
	  return grunt.task.run(['build', 'connect:dist:keepalive']);
	}

	grunt.task.run([
	  'clean:server',
	  'wiredep',
	  'concurrent:server',
	  'autoprefixer',
	  'connect:livereload',
	  'watch'
	]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
	grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
	grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('build', [
	'clean:dist',
	'wiredep',
	'useminPrepare',
	'concurrent:dist',
	'autoprefixer',
	'concat',
	'ngAnnotate',
	'copy:dist',
	'cdnify',
	'cssmin',
	'uglify',
	'filerev',
	'usemin',
	'htmlmin'
  ]);

  grunt.registerTask('default', [
	'newer:jshint',
	'build'
  ]);
};
