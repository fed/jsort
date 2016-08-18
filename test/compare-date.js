import {expect} from 'chai';
import {compareDate} from '../src/utils/comparators';

describe('Date Comparisons', () => {
  it('compares dates in MM/DD/YYYY format', () => {
    expect(compareDate('10/01/2015', '10/02/2015') < 0).to.be.true;
    expect(compareDate('10/02/2015', '10/01/2015') > 0).to.be.true;
    expect(compareDate('01/31/1990', '01/31/2015') < 0).to.be.true;
    expect(compareDate('01/31/2015', '01/31/1990') > 0).to.be.true;
  });

  it('compares dates in YYYY-MM-DD format', () => {
    expect(compareDate('2015-10-01', '2015-10-02') < 0).to.be.true;
    expect(compareDate('2015-10-02', '2015-10-01') > 0).to.be.true;
    expect(compareDate('1990-01-31', '2015-01-31') < 0).to.be.true;
    expect(compareDate('2015-01-31', '1990-01-31') > 0).to.be.true;
  });

  it('compares identical dates', () => {
    expect(compareDate('12/25/2017', '12/25/2017')).to.equal(0);
    expect(compareDate('01/31/1990', '01/31/1990')).to.equal(0);
    expect(compareDate('2017-12-25', '2017-12-25')).to.equal(0);
    expect(compareDate('1990-01-31', '1990-01-31')).to.equal(0);
  });

  it('compares dates in different formats', () => {
    expect(compareDate('January 31, 2014', 'Sat, Jan 3, 2015') < 0).to.be.true;
    expect(compareDate('2015-01-31', '01/30/2015') > 0).to.be.true;
  });
});
