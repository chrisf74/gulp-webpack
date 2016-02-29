var getKarmaConfig = require('./getKarmaConfig');

module.exports = function (config) {
	var karmaConfig = getKarmaConfig();
	config.set(karmaConfig);
};
