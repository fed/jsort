import {expect} from 'chai';
import {compareCurrency} from '../src/utils/comparators';

describe('Currency Comparisons', () => {
  it('compares amounts in the same currency', () => {
    expect(compareCurrency('$1,500.00', '$1,000.00')).to.equal(500);
    expect(compareCurrency('€500.50', '€10,500.50')).to.equal(-10000);
    expect(compareCurrency('£9,000.00', '£1,000.00')).to.equal(8000);
  });

  it('compares amounts with no decimal values', () => {
    expect(compareCurrency('£2,500', '£1,250')).to.equal(1250);
    expect(compareCurrency('-$150', '$125')).to.equal(-275);
  });

  it('compares exactly the same amount of money', () => {
    expect(compareCurrency('-$0.00', '$0.00')).to.equal(0);
    expect(compareCurrency('$1,000.00', '$1,000.00')).to.equal(0);
    expect(compareCurrency('€10,500.50', '€10,500.50')).to.equal(0);
    expect(compareCurrency('£900,000.75', '£900,000.75')).to.equal(0);
  });

  it('compares negative values', () => {
    expect(compareCurrency('-$10.00', '-$10.50')).to.equal(0.5);
    expect(compareCurrency('-$0.50', '$0.75')).to.equal(-1.25);
    expect(compareCurrency('-£90.00', '-£90.75')).to.equal(0.75);
  });
});
