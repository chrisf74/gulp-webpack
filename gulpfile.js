/**
 * DEPENDENCIES
 */
var gulpUtil = require('gulp-util');
var webpack = require('webpack');
var karma = require('karma');
var argv = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');
var del = require('del');


/**
 * VARIABLES
 */
var configPath = path.resolve(__dirname, 'config/');


/**
 * TEST TASK
 * @param -w, -watch
 * @param -b, -browsers
 * @public
 * TODO:
 * - JSX tests
 * - Mock modules
 * - Fixtures
 * - Browser args wo quotes?
 */
gulp.task('test', function (done) {
	var karmaConfig = {
		configFile: configPath + '/karma.conf.js'
	};

	if (!argv.w && !argv.watch) {
		karmaConfig.singleRun = true;
	} else {
		karmaConfig.autoWatch = true;
	}

	if (argv.b || argv.browsers) {
		var browserArg = argv.b || argv.browsers;
		var browserArr = browserArg.split(",");
		karmaConfig.browsers = browserArr;
	}

	var doneCalled = false;
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


/**
 * SERVE TASK
 * @public
 * TODO:
 * - Serve src directory
 */
gulp.task('serve', function (done) {

});


/**
 * BUILD TASK
 * @param -p, -production
 * @public
 * TODO:
 * - Assign proper webpack config based on param
 * - Output bundle to build directory
 */
gulp.task('build', function (done) {
	var webpackPath;
	if (argv.p || argv.production) {
		webpackPath = configPath + '/webpack.prod.config.js'
	} else {
		webpackPath = configPath + '/webpack.dev.config.js'
	}

	var webpackConfig = require(webpackPath);
	var delPaths = del.sync(['build'], {});

	webpack(webpackConfig, function (err, stats) {
		if (err) {
			throw new gulpUtil.PluginError('Webpack Error:', err);
		} else {
			gulpUtil.log('Webpack', stats.toString({colors: true}));
		}

		done();
	});
});


/**
 * RELEASE TASK
 */
gulp.task('release', function (done) {

});
