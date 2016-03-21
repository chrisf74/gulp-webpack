var path = require('path');

module.exports = function () {
	return {
		entry: {
			app: [path.resolve(__dirname, '../src/src.jsx')]
		},

		devServer: {
			publicPath: '/',
			filename: 'srcBundle.js',
			contentBase: 'src/',
			historyApiFallback: true
		},

		resolve: {
			extensions: ['', '.js', '.jsx']
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
