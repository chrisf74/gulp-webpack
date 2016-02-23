var path = require('path');

module.exports = function (config) {
	config.set({
		hostname: '0.0.0.0',
		port: '9876',
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
		files: [
			path.dirname(require.resolve('jasmine-core')) + '/jasmine-core/jasmine.js',
			'src/**/*.js',
			'test/**/*[sS]pecs.js'
		]
	});
};
