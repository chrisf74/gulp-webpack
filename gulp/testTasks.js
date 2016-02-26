/**
 * DEPENDENCIES
 */
var gulpUtil = require('gulp-util');
var karma = require('karma');
var gulp = require('gulp');
var path = require('path');

/**
 *
 */
function karmaConfigFactory() {
	return {
		hostname: '0.0.0.0',

		port: '9876',

		files: [
			'test/specs.js'
		],

		preprocessors: {
			'test/specs.js': ['webpack']
		},

		frameworks: ['jasmine'],

		plugins: [
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-webpack')
		],

		webpackMiddleware: {
			stats: {
				colors: true
			}
		},

		colors: true
	};
}

/**
 * RUN TESTS TASK
 */
gulp.task('run:tests', function (done) {
	var karmaConfig = karmaConfigFactory();
	karmaConfig.browsers = ['PhantomJS'];
	new karma.Server(karmaConfig, done).start();
});

/**
 * SERVE TESTS TASK
 */
gulp.task('serve:tests', function (done) {
	var karmaConfig = karmaConfigFactory();
	new karma.Server(karmaConfig, done).start();
});
