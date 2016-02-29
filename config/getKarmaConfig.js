var path  = require('path');
var entry = path.resolve(__dirname, '../test/specs.js');

module.exports = function () {
	var config = {
		colors: true,

		hostname: '0.0.0.0',

		port: '9876',

		files: [entry],

		preprocessors: {},

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

    reporters: ['dots'],

		logLevel: 'error',

		plugins: [
			require('karma-jasmine'),
			require('karma-phantomjs-launcher'),
			require('karma-webpack')
		],

		webpackMiddleware: {
			stats: {
				colors: true
			}
		}
	};

	config.preprocessors[entry] = ['webpack'];
	return config;
};
