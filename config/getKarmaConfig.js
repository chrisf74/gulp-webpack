var getWebpackConfig = require('./getWebpackConfig');
var webpackConfig = getWebpackConfig();

webpackConfig.entry = {};
webpackConfig.watch = true;

var path = require('path');
var testEntry = path.resolve(__dirname, '../test/test.jsx');

module.exports = function () {
	var config = {
		colors: true,

		hostname: '0.0.0.0',

		port: '9876',

		files: [{
			pattern: testEntry,
      watched: false,
		}],

		preprocessors: {},

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

    reporters: ['dots'],

		logLevel: 'error',

		webpack: webpackConfig,

		// webpackMiddleware: {
		// 	stats: {
		// 		colors: true
		// 	}
		// },

		webpackServer: {
			noInfo: true
		}
	};

	config.preprocessors[testEntry] = ['webpack'];
	return config;
};
