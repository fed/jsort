jest.dontMock('../utils/compare-date');

var compareDate = require('../utils/compare-date');

describe('compare-date', function () {
  it('compares dates in MM/DD/YYYY format', function () {
    expect(compareDate('10/01/2015', '10/02/2015')).toBe(-86400000);
  });

  it('compares dates in YYYY-MM-DD format', function () {
    expect(compareDate('2015-10-01', '2015-10-02')).toBe(-86400000);
  });
});
