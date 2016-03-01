var getWebpackConfig = require('./getWebpackConfig');
var webpackConfig = getWebpackConfig();
var path = require('path');

webpackConfig.devtool = "sourcemap";
webpackConfig.debug = true;
webpackConfig.output.path = path.resolve(__dirname, '../build');

module.exports = webpackConfig;

