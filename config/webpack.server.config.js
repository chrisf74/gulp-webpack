var getWebpackConfig = require('./getWebpackConfig');
var webpackConfig = getWebpackConfig();

webpackConfig.devtool = "sourcemap";
webpackConfig.debug = true;

module.exports = webpackConfig;
