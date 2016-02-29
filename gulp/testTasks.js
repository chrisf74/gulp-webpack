/**
 * DEPENDENCIES
 */
var gulpUtil = require('gulp-util');
var karma = require('karma');
var argv = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');

/**
 * KARMA CONFIG FACTORY
 */
function karmaConfigFactory() {
	return {
		colors: true,

		hostname: '0.0.0.0',

		port: '9876',

		files: ['test/specs.js'],

		preprocessors: {
			'test/specs.js': ['webpack']
		},

		frameworks: ['jasmine'],

		plugins: [
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-chrome-launcher'),
			require('karma-webpack')
		],

		browsers: ['PhantomJS'],

    reporters: ['dots'],

		webpackMiddleware: {
			stats: {
				colors: true
			}
		},

		logLevel: 'error'
	};
}

/**
 * TEST TASK
 * @param -w, -watch
 */
gulp.task('test', function (done) {
	var karmaConfig = karmaConfigFactory();
	var doneCalled  = false;

	if (!argv.w && !argv.watch) {
		karmaConfig.singleRun = true;
	} else {
		karmaConfig.autoWatch = true;
	}

	if (argv.b || argv.browsers) {
		var browserArg = argv.b || argv.browsers;
		var browserArr = browserArg.split(" ");
		karmaConfig.browsers = browserArr;
	}

	var server = new karma.Server(karmaConfig, function () {
  	if (doneCalled) {
  		return;
  	} else {
  		doneCalled = true;
  		return done();
  	}
	});

  server.start();
});
