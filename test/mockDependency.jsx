var path = require('path');
export default function (modulePath, mockExports) {
	var newPath = path.resolve(modulePath);
	require(newPath);
	// require(path.resolve(__dirname, modulePath));
	// require.cache[require.resolve(path.resolve(__dirname, modulePath))].exports = mockExports;
};
