module.exports = function (config) {
	config.set({
		hostname: '0.0.0.0',

		port: '9876',

		files: [
			'test/specs.js'
		],

		preprocessors: {
			'test/specs.js': ['webpack']
		},

		frameworks: ['jasmine'],

		browsers: ['PhantomJS'],

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

		colors: true,

		autoWatch: true

	});
};