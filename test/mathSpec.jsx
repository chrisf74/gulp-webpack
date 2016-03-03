var math;
describe('math', () => {
	beforeEach(() => {
		require('../src/add');
		require.cache[require.resolve('../src/add')].exports = {
		  __esModule: true,
		  default: function (a,b) {
		    return 1;
		  }
		};
		math = require('../src/math').default;
	});

  it('should exist', () => {
    expect(math).not.toBeUndefined();
  });

  it('should add two numbers', () => {
    expect(math.add()).toEqual(1);
  });
});
