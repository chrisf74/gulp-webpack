/**
 * DEPENDENCIES
 */
var gulpUtil = require('gulp-util');
var karma = require('karma');
var argv = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');


/**
 * TEST TASK
 * @param -w, -watch
 * @param -b, -browsers
 */
gulp.task('test', function (done) {
	var karmaConfig = {
		configFile: path.resolve(__dirname, 'config/karma.conf.js')
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
 */
gulp.task('serve', function (done) {

});
