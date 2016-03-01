var getWebpackConfig = require('./getWebpackConfig');
var webpackConfig = getWebpackConfig();
var path = require('path');

webpackConfig.output.path = path.resolve(__dirname, '../build');

module.exports = webpackConfig;
