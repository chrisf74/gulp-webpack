var path = require('path');
var srcPath = path.resolve(__dirname, '../src');

module.exports = function () {
	return {
		entry: {
			app: [srcPath + '/index.js']
		},

		output: {
			path: srcPath,
			filename: 'bundle.js'
		}
	};
};
