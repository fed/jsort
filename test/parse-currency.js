import {expect} from 'chai';
import {parseCurrency} from '../src/utils/parsers';

describe('Currency Parser', () => {
  it('parses currency properly', () => {
    expect(parseCurrency('$1,050.25')).to.equal(1050.25);
    expect(parseCurrency('€71,021,050.00')).to.equal(71021050);
    expect(parseCurrency('£9,013,543,050.99')).to.equal(9013543050.99);
    expect(parseCurrency('$0.00')).to.equal(0);
    expect(parseCurrency('€0.00')).to.equal(0);
    expect(parseCurrency('£0.00')).to.equal(0);
  });
});
