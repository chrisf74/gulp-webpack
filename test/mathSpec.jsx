import mockDependency from './mockDependency';

let math;
describe('math', () => {
	beforeEach(() => {
		mockDependency('../src/add', {
			__esModule: true,
			default: function () {return 1;},
		});
		math = require('../src/math').default;
	});

  it('should exist', () => {
    expect(math).not.toBeUndefined();
  });

  it('should add two numbers', () => {
    expect(math.add()).toEqual(1);
  });
});
