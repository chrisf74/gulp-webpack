/**
 * Store all src module ids
 */
const srcContext = require.context('../src', true, /.js?$/);
const srcModuleIds = srcContext.keys().map(function (module) {
	return String(srcContext.resolve(module));
});

/**
 * Before each test, clear cached modules in case any were mocked
 */
beforeEach(function () {
	srcModuleIds.forEach(function (id) {
		delete require.cache[id];
	});
});

/**
 * Run each test spec
 */
const testContext = require.context('./', true, /spec\.js$/i);
testContext.keys().forEach(testContext);
