import {expect} from 'chai';
import {compareNumeric} from '../src/utils/comparators';

describe('Numeric Comparisons', () => {
  it('compares integers properly', () => {
    expect(compareNumeric('7', '3')).to.equal(4);
    expect(compareNumeric('7', '8')).to.equal(-1);
    expect(compareNumeric('7', '100')).to.equal(-93);
    expect(compareNumeric('-7', '3')).to.equal(-10);
    expect(compareNumeric('-7', '-3')).to.equal(-4);
    expect(compareNumeric('-70', '0')).to.equal(-70);
  });

  it('compares floats properly', () => {
    expect(compareNumeric('7.00', '3.00')).to.equal(4);
    expect(compareNumeric('7.5', '8.5')).to.equal(-1);
    expect(compareNumeric('7.1', '100.1')).to.equal(-93);
    expect(compareNumeric('-7.05', '3.25')).to.equal(-10.3);
    expect(compareNumeric('-7', '-3')).to.equal(-4);
    expect(compareNumeric('-7', '-3')).to.equal(-4);
  });

  it('compares identical numbers', () => {
    expect(compareNumeric('0', '0')).to.equal(0);
    expect(compareNumeric('7', '7')).to.equal(0);
    expect(compareNumeric('0.00', '0.00')).to.equal(0);
    expect(compareNumeric('7.0001', '7.0001')).to.equal(0);
    expect(compareNumeric('-7', '-7')).to.equal(0);
    expect(compareNumeric('-7.00', '-7')).to.equal(0);
    expect(compareNumeric('+0', '-0')).to.equal(0);
  });
});
