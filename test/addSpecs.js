var add = require('../src/add');
describe('add', function () {
	it('should add numbers', function () {
		expect(add(1,1)).toEqual(2);
	});
});
