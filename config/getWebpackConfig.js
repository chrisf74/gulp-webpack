var path = require('path');
var srcPath = path.resolve(__dirname, '../src');

module.exports = function () {
	return {
		entry: {
			app: [srcPath + '/index.js']
		},

		devServer: {
			publicPath: '/',
			filename: 'srcBundle.js',
			contentBase: 'src/'
		},

		plugins: []
	};
};
