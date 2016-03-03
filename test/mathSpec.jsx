import mathMock from './mathMock';
let math;

describe('math', () => {
	beforeEach(() => {
		math = mathMock({
			add: function () {return 1;}
		});
	});

  it('should exist', () => {
    expect(math).not.toBeUndefined();
  });

  it('should add two numbers', () => {
    expect(math.add()).toEqual(1);
  });
});
