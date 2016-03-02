import add from '../src/add';

describe('add', () => {
	it('should add numbers', () => {
		expect(add(1,1)).toEqual(2);
	});
});
