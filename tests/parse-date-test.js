jest.autoMockOff();

var parseDate = require('../src/utils/parse-date');

describe('parse-date', function () {
  it('parses MM/DD/YYYY formatted dates', function () {
    expect(parseDate('01/31/1990')).toBe(633751200000);
  });

  it('parses MM/DD/YYYY HH:MM:SS formatted dates', function () {
    expect(parseDate('01/31/1990 00:00:00')).toBe(633751200000);
  });

  it('parses YYYY-MM-DD formatted dates', function () {
    expect(parseDate('1990-01-31')).toBe(633751200000);
  });

  it('parses YYYY-MM-DD HH:MM:SS formatted dates', function () {
    expect(parseDate('1990-01-31 00:00:00')).toBe(633751200000);
  });

  it('parses date strings with no set time', function () {
    expect(parseDate('Jan 31, 1990')).toBe(633751200000);
    expect(parseDate('Wed, Jan 31, 1990')).toBe(633751200000);
    expect(parseDate('Wednesday, Jan 31, 1990')).toBe(633751200000);
    expect(parseDate('January 31, 1990')).toBe(633751200000);
    expect(parseDate('Wed, January 31, 1990')).toBe(633751200000);
    expect(parseDate('Wednesday, January 31, 1990')).toBe(633751200000);
  });

  it('parses strings with a set date and time', function () {
    expect(parseDate('Jan 31, 1990 00:00:00')).toBe(633751200000);
    expect(parseDate('Wed, Jan 31, 1990 00:00:00')).toBe(633751200000);
    expect(parseDate('Wednesday, Jan 31, 1990 00:00:00')).toBe(633751200000);
    expect(parseDate('January 31, 1990 00:00:00')).toBe(633751200000);
    expect(parseDate('Wed, January 31, 1990 00:00:00')).toBe(633751200000);
    expect(parseDate('Wednesday, January 31, 1990 00:00:00')).toBe(633751200000);
  });
});
