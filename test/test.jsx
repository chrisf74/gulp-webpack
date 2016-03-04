/**
 * Store all src module ids
 */
const srcContext = require.context('../src', true, /.jsx?$/);
const srcModuleIds = srcContext.keys().map(module => {
	return String(srcContext.resolve(module));
});

/**
 * Before each test, clear cached modules in case any were mocked
 */
beforeEach(() => {
	srcModuleIds.forEach(id => delete require.cache[id]);
});

/**
 * Run each test spec
 */
const testContext = require.context('./', true, /spec\.jsx$/i);
testContext.keys().forEach(testContext);
