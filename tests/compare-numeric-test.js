jest.dontMock('../utils/compare-numeric');

var compareNumber = require('../utils/compare-numeric');

describe('compare-number', function () {
  it('compares integers properly', function () {
    expect(compareNumber('7', '3')).toBe(4);
    expect(compareNumber('7', '8')).toBe(-1);
    expect(compareNumber('7', '100')).toBe(-93);
    expect(compareNumber('-7', '3')).toBe(-10);
    expect(compareNumber('-7', '-3')).toBe(-4);
    expect(compareNumber('-70', '0')).toBe(-70);
  });

  it('compares floats properly', function () {
    expect(compareNumber('7.00', '3.00')).toBe(4);
    expect(compareNumber('7.5', '8.5')).toBe(-1);
    expect(compareNumber('7.1', '100.1')).toBe(-93);
    expect(compareNumber('-7.05', '3.25')).toBe(-10.3);
    expect(compareNumber('-7', '-3')).toBe(-4);
    expect(compareNumber('-7', '-3')).toBe(-4);
  });

  it('compares identical numbers', function () {
    expect(compareNumber('0', '0')).toBe(0);
    expect(compareNumber('7', '7')).toBe(0);
    expect(compareNumber('0.00', '0.00')).toBe(0);
    expect(compareNumber('7.0001', '7.0001')).toBe(0);
    expect(compareNumber('-7', '-7')).toBe(0);
    expect(compareNumber('-7.00', '-7')).toBe(0);
    expect(compareNumber('+0', '-0')).toBe(0);
  });
});
