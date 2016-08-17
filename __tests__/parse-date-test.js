jest.autoMockOff();

var parseDate = require('../src/utils/parse-date');
var sampleTimestamp = new Date('01/31/1990 00:00:00').getTime();

describe('parse-date', function () {
  it('parses MM/DD/YYYY formatted dates', function () {
    expect(parseDate('01/31/1990')).toBe(sampleTimestamp);
  });

  it('parses MM/DD/YYYY HH:MM:SS formatted dates', function () {
    expect(parseDate('01/31/1990 00:00:00')).toBe(sampleTimestamp);
  });

  it('parses YYYY-MM-DD formatted dates', function () {
    expect(parseDate('1990-01-31')).toBe(sampleTimestamp);
  });

  it('parses YYYY-MM-DD HH:MM:SS formatted dates', function () {
    expect(parseDate('1990-01-31 00:00:00')).toBe(sampleTimestamp);
  });

  it('parses date strings with no set time', function () {
    expect(parseDate('Jan 31, 1990')).toBe(sampleTimestamp);
    expect(parseDate('Wed, Jan 31, 1990')).toBe(sampleTimestamp);
    expect(parseDate('Wednesday, Jan 31, 1990')).toBe(sampleTimestamp);
    expect(parseDate('January 31, 1990')).toBe(sampleTimestamp);
    expect(parseDate('Wed, January 31, 1990')).toBe(sampleTimestamp);
    expect(parseDate('Wednesday, January 31, 1990')).toBe(sampleTimestamp);
  });

  it('parses strings with a set date and time', function () {
    expect(parseDate('Jan 31, 1990 00:00:00')).toBe(sampleTimestamp);
    expect(parseDate('Wed, Jan 31, 1990 00:00:00')).toBe(sampleTimestamp);
    expect(parseDate('Wednesday, Jan 31, 1990 00:00:00')).toBe(sampleTimestamp);
    expect(parseDate('January 31, 1990 00:00:00')).toBe(sampleTimestamp);
    expect(parseDate('Wed, January 31, 1990 00:00:00')).toBe(sampleTimestamp);
    expect(parseDate('Wednesday, January 31, 1990 00:00:00')).toBe(sampleTimestamp);
  });
});
