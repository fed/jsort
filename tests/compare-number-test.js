jest.dontMock('../utils/compare-number');

var compareNumber = require('../utils/compare-number');

describe('compare-number', function () {
  it('compares numbers properly', function () {
    expect(compareNumber('7', '3')).toBe(4);
    expect(compareNumber('7', '7')).toBe(0);
    expect(compareNumber('7', '8')).toBe(-1);
    expect(compareNumber('7', '100')).toBe(-93);
    expect(compareNumber('-7', '3')).toBe(-10);
    expect(compareNumber('-7', '-3')).toBe(-4);
  });
});
