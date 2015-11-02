jest.dontMock('../utils/compare-date');

var compareDate = require('../utils/compare-date');

describe('compare-date', function () {
  it('compares dates in MM/DD/YYYY format', function () {
    expect(compareDate('10/01/2015', '10/02/2015') < 0).toBe(true);
    expect(compareDate('10/02/2015', '10/01/2015') > 0).toBe(true);
    expect(compareDate('01/31/1990', '01/31/2015') < 0).toBe(true);
    expect(compareDate('01/31/2015', '01/31/1990') > 0).toBe(true);
  });

  it('compares dates in YYYY-MM-DD format', function () {
    expect(compareDate('2015-10-01', '2015-10-02') < 0).toBe(true);
    expect(compareDate('2015-10-02', '2015-10-01') > 0).toBe(true);
    expect(compareDate('1990-01-31', '2015-01-31') < 0).toBe(true);
    expect(compareDate('2015-01-31', '1990-01-31') > 0).toBe(true);
  });

  it('compares identical dates', function () {
    expect(compareDate('12/25/2017', '12/25/2017')).toBe(0);
    expect(compareDate('01/31/1990', '01/31/1990')).toBe(0);
    expect(compareDate('2017-12-25', '2017-12-25')).toBe(0);
    expect(compareDate('1990-01-31', '1990-01-31')).toBe(0);
  });
});
