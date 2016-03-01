var path = require('path');
var srcPath = path.resolve(__dirname, '../src');

module.exports = function () {
	return {
		entry: {
			app: [srcPath + '/index.jsx']
		},

		devServer: {
			publicPath: '/',
			filename: 'srcBundle.js',
			contentBase: 'src/'
		},

		module: {
			loaders: [
			  {
			    test: /\.jsx?$/,
			    exclude: /(node_modules|bower_components)/,
			    loader: 'babel',
			    query: {
			      presets: ['es2015']
			    }
			  }
			]
		},

		plugins: []
	};
};
