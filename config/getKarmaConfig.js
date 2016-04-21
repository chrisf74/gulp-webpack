var path = require('path');
var testEntry = path.resolve(__dirname, '../test/test.jsx');

module.exports = function (webpackConfig) {
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

		webpackServer: {
			noInfo: true
		}
	};

	config.preprocessors[testEntry] = ['webpack', 'sourcemap'];

	// Uncomment on to debug test bundle.
	// config.webpackMiddleware: {
	// 	stats: {
	// 		colors: true
	// 	}
	// };

	return config;
};
