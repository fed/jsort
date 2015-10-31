jest.dontMock('../utils/compare-currency');

var compareCurrency = require('../utils/compare-currency');

describe('compare-currency', function () {
  it('compares amounts in the same currency', function () {
    expect(compareCurrency('$1,000.00', '$1,000.00')).toBe(0);
    expect(compareCurrency('€10,500.50', '€10,500.50')).toBe(0);
    expect(compareCurrency('£900,000.75', '£900,000.75')).toBe(0);
  });
});
