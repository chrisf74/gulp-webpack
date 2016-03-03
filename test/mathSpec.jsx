require('../src/add');
require.cache[require.resolve('../src/add')].exports = function (a,b) {
	return 1;
};

var math = require('../src/math');
describe('math', () => {

	it('should exist', () => {
		expect(math).not.toBeUndefined();
	});

	it('should add two numbers', () => {
		console.log("math.add = " + math.add);
		expect(math.add()).toEqual(1);
	});
});
