jest.autoMockOff();

var compareCurrency = require('../src/utils/compare-currency');

describe('compare-currency', function () {
  it('compares amounts in the same currency', function () {
    expect(compareCurrency('$1,500.00', '$1,000.00')).toBe(500);
    expect(compareCurrency('€500.50', '€10,500.50')).toBe(-10000);
    expect(compareCurrency('£9,000.00', '£1,000.00')).toBe(8000);
  });

  it('compares amounts with no decimal values', function () {
    expect(compareCurrency('£2,500', '£1,250')).toBe(1250);
    expect(compareCurrency('-$150', '$125')).toBe(-275);
  });

  it('compares exactly the same amount of money', function () {
    expect(compareCurrency('-$0.00', '$0.00')).toBe(0);
    expect(compareCurrency('$1,000.00', '$1,000.00')).toBe(0);
    expect(compareCurrency('€10,500.50', '€10,500.50')).toBe(0);
    expect(compareCurrency('£900,000.75', '£900,000.75')).toBe(0);
  });

  it('compares negative values', function () {
    expect(compareCurrency('-$10.00', '-$10.50')).toBe(0.5);
    expect(compareCurrency('-$0.50', '$0.75')).toBe(-1.25);
    expect(compareCurrency('-£90.00', '-£90.75')).toBe(0.75);
  });
});
