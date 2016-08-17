jest.autoMockOff();

var parseCurrency = require('../src/utils/parse-currency');

describe('parse-currency', function () {
  it('parses currency properly', function () {
    expect(parseCurrency('$1,050.25')).toBe(1050.25);
    expect(parseCurrency('€71,021,050.00')).toBe(71021050);
    expect(parseCurrency('£9,013,543,050.99')).toBe(9013543050.99);
    expect(parseCurrency('$0.00')).toBe(0);
    expect(parseCurrency('€0.00')).toBe(0);
    expect(parseCurrency('£0.00')).toBe(0);
  });
});
