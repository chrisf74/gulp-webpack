var path = require('path');
var srcPath = path.resolve(__dirname, '../src');
require(srcPath+'/add');
require.cache[require.resolve('add')].exports = function (a,b) {
	return 1;
};

import math from '../src/math';

describe('math', () => {

	it('should exist', () => {
		expect(math).not.toBeUndefined();
	});

	it('should add two numbers', () => {
		expect(math.add()).toEqual(1);
	});
});
