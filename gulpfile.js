/**
 * Dependencies
 */
var gulpUtil = require('gulp-util');
var connect = require('gulp-connect');
var karma = require('karma');
var gulp = require('gulp');
var del = require('del');

/**
 * Define build directory
 */
var buildDir = 'build';

/**
 * Copy
 * Copy unbuilt files to build directory
 */
gulp.task('copy', function () {
	return gulp
		.src(['src/*'])
		.pipe(gulp.dest(buildDir));
});

/**
 * Clean
 * Remove build directory
 */
gulp.task('clean', function () {
	return del.sync([buildDir]);
});

/**
 * Build
 * Build js, css, etc
 */
var buildDeps = ['clean','copy'];
gulp.task('build', buildDeps, function () {
	// Do build stuff...
});

/**
 * Watch
 * Watch src files and build on change
 */
gulp.task('watch', function () {
	gulp.watch(['src/*'], ['build']);
});

/**
 * Serve
 * Serve build directory
 */
var serveDeps = ['build','watch'];
gulp.task('serve', serveDeps, function () {
	return connect.server({
		root: buildDir,
		host: '0.0.0.0'
	});
});

/**
 * Test
 * Start Karma server
 */
var testDeps = [];
gulp.task('test', testDeps, function (done) {
	new karma.Server({
    configFile: __dirname + '/karma.conf.js'
  }, done).start();
});
