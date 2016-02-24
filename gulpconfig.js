/**
 * Build directory
 */
var buildDir = 'build';

/**
 * Return default webpack config
 */
function getDefaultWebpackConfig() {
	return {

	};
}

/**
 * Return default karma config
 */
function getDefaultKarmaConfig() {
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

		colors: true,

		autoWatch: false
	};
}

/**
 * Gulp config
 */
module.exports = {
	// Build directory
	buildDir: buildDir,

	// Folders/files to copy to build directory
	copyGlobs: [
		'src/*'
	],

	// Folder/files to watch
	watchGlobs: [
		'src/*'
	],

	//
	getWebpackConfig: function (type) {
		var config = getDefaultWebpackConfig();

		// Return default webpack config
		if (!type) {
			return config;
		}
	},

	// Get karma config
	getKarmaConfig: function (type) {
		var config = getDefaultKarmaConfig();

		// Add default webpack config to karma config
		config.webpack = getDefaultWebpackConfig();

		// Return default karma config
		if (!type) {
			return config;
		}
	},
};
