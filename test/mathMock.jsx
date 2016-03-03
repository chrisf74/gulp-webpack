export default function (mathExports) {
	require('./../src/add');
	require.cache[require.resolve('./../src/add')].exports = {
	  __esModule: true,
	  default: mathExports.add,
	};

	return require('./../src/math').default;
};
