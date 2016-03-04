var path = require('path');

module.exports = function () {
	return {
		entry: {
			app: [path.resolve(__dirname, '../src/src.js')]
		},

		devServer: {
			publicPath: '/',
			filename: 'srcBundle.js',
			contentBase: 'src/'
		},

		plugins: []
	};
};
