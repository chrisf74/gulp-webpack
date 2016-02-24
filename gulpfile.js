/**
 * Dependencies
 */
var gulpUtil = require('gulp-util');
var karma = require('karma');
var gulp = require('gulp');
var del = require('del');

/**
 * Build directory
 */
var buildDir = 'build';

/**
 * Webpack default config
 */
function makeWebpackConfig() {
	return {};
}

/**
 * Copy
 */
gulp.task('copy', function () {
	return gulp
		.src([
			'src/*'
		])
		.pipe(
			gulp.dest(buildDir)
		);
});

/**
 * Clean
 */
gulp.task('clean', function () {
	return del.sync([buildDir]);
});
