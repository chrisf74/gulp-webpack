// MOCK A MODULES DEPENDENCY
// var module;
// beforeEach(function () {
// 	// Add the dependency to the require cache
// 	require('./../src/dependency');

// 	// Find dependency in require cache and mock it
// 	require.cache[require.resolve('./../src/dependency')].exports = {
// 		__esModule: true,
// 		default: {
// 			// Mock here
// 		}
// 	};

// 	// Require module for testing
// 	module = require('./../src/module').default;
// });

/**
 * Example
 */
describe('testSpec', function () {
	it('should run', function () {
		expect(true).toEqual(true);
	});
});
