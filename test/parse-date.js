import {expect} from 'chai';
import {parseDate} from '../src/utils/parsers';

const sampleTimestamp = new Date('01/31/1990 00:00:00').getTime();

describe('Date Parser', () => {
  it('parses MM/DD/YYYY formatted dates', () => {
    expect(parseDate('01/31/1990')).to.equal(sampleTimestamp);
  });

  it('parses MM/DD/YYYY HH:MM:SS formatted dates', () => {
    expect(parseDate('01/31/1990 00:00:00')).to.equal(sampleTimestamp);
  });

  it('parses YYYY-MM-DD formatted dates', () => {
    expect(parseDate('1990-01-31')).to.equal(sampleTimestamp);
  });

  it('parses YYYY-MM-DD HH:MM:SS formatted dates', () => {
    expect(parseDate('1990-01-31 00:00:00')).to.equal(sampleTimestamp);
  });

  it('parses date strings with no set time', () => {
    expect(parseDate('Jan 31, 1990')).to.equal(sampleTimestamp);
    expect(parseDate('Wed, Jan 31, 1990')).to.equal(sampleTimestamp);
    expect(parseDate('Wednesday, Jan 31, 1990')).to.equal(sampleTimestamp);
    expect(parseDate('January 31, 1990')).to.equal(sampleTimestamp);
    expect(parseDate('Wed, January 31, 1990')).to.equal(sampleTimestamp);
    expect(parseDate('Wednesday, January 31, 1990')).to.equal(sampleTimestamp);
  });

  it('parses strings with a set date and time', () => {
    expect(parseDate('Jan 31, 1990 00:00:00')).to.equal(sampleTimestamp);
    expect(parseDate('Wed, Jan 31, 1990 00:00:00')).to.equal(sampleTimestamp);
    expect(parseDate('Wednesday, Jan 31, 1990 00:00:00')).to.equal(sampleTimestamp);
    expect(parseDate('January 31, 1990 00:00:00')).to.equal(sampleTimestamp);
    expect(parseDate('Wed, January 31, 1990 00:00:00')).to.equal(sampleTimestamp);
    expect(parseDate('Wednesday, January 31, 1990 00:00:00')).to.equal(sampleTimestamp);
  });
});
