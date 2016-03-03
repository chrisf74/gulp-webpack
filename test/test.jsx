const srcContext = require.context('../src', true, /.jsx?$/);
const srcModuleIds = srcContext.keys().map(module => {
	return String(srcContext.resolve(module));
});

beforeEach(() => {
	srcModuleIds.forEach(id => delete require.cache[id]);
});

const testContext = require.context('./', true, /Spec\.jsx$/);
testContext.keys().forEach(testContext);
