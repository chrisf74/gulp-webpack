/**
 * DEPENDENCIES
 */
var getWebpackConfig = require('./config/getWebpackConfig');
var WebpackDevServer = require("webpack-dev-server");
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
 * - Fixtures
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
 * @param -h, -hot
 * @public
 * TODO:
 * - Get hmr working?
 */
gulp.task('serve', function (done) {
	var webpackConfig = getWebpackConfig();
	webpackConfig.output = {
		path: path.resolve(__dirname, 'src'),
		filename: 'srcBundle.js'
	};

	if (argv.h || argv.hot) {
		webpackConfig.entry.app.unshift('webpack/hot/dev-server');
		webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
		webpackConfig.devServer.hot = true;
	}

	webpackConfig.entry.app.unshift('webpack-dev-server/client?http://0.0.0.0:8080');
	webpackConfig.devtool = 'eval';
	webpackConfig.debug = true;

	var compiler = webpack(webpackConfig);
	var server = new WebpackDevServer(compiler, webpackConfig.devServer);

	server.listen(8080, "0.0.0.0", function (err) {
		if (err) {
			throw gulpUtil.PluginError('Serve Error', err);
		} else {
			gulpUtil.log('Serving...');
		}
		done();
	});
});


/**
 * BUILD TASK
 * @param -d, -debug
 * @public
 * TODO:
 */
gulp.task('build', function (done) {
	var webpackConfig = getWebpackConfig();
	webpackConfig.output = {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	};

	if (argv.d || argv.debug) {
		webpackConfig.devtool = "sourcemap";
		webpackConfig.debug   = true;
	} else {
		// Do production build stuff like minify, etc
	}

	// Delete build directory
	del.sync(['build'], {});

	// Webpack build
	webpack(webpackConfig, function (err, stats) {
		if (err) {
			throw new gulpUtil.PluginError('Webpack Error:', err);
		} else {
			gulpUtil.log('Webpack', stats.toString({colors: true}));
		}

		done();
	});
});
