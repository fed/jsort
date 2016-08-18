import {expect} from 'chai';
import isEqual from 'lodash/isEqual';
import jsort from '../src/jsort';

describe('jsort', () => {
  it('sorts numeric arrays properly', () => {
    expect(isEqual(jsort.numeric([2, 1, 3]), [1, 2, 3])).to.be.true;
    expect(isEqual(jsort.numeric([5, 7, 6]).reverse(), [7, 6, 5])).to.be.true;
    expect(isEqual(jsort.numeric([1, 10, 11, 110, 111, 0]), [0, 1, 10, 11, 110, 111])).to.be.true;
    expect(isEqual(jsort.numeric([20, 2.01, 2.001]), [2.001, 2.01, 20])).to.be.true;
    expect(isEqual(jsort.numeric([15.005, 15.006, 15.0001]).reverse(), [15.006, 15.005, 15.0001])).to.be.true;
    expect(isEqual(jsort.numeric([1.1, 1.15, 1.20, 10.1, 11.1, 0.01]), [0.01, 1.1, 1.15, 1.2, 10.1, 11.1])).to.be.true;
  });

  it('sorts text arrays properly', () => {
    expect(isEqual(jsort.text(['Australia', 'Argentina', 'New Zealand', 'Austria', 'Canada']), ['Argentina', 'Australia', 'Austria', 'Canada', 'New Zealand'])).to.be.true;
    expect(isEqual(jsort.text(['Welcome', 'to', 'New', 'Zealand']), ['New', 'to', 'Welcome', 'Zealand'])).to.be.true;
    expect(isEqual(jsort.text(['I', 'am', 'Yoda']).reverse(), ['Yoda', 'I', 'am'])).to.be.true;
  });

  it('sorts currency arrays properly', () => {
    expect(isEqual(jsort.currency(['$1,726.75', '$1,726.50', '$1,720.99']), ['$1,720.99', '$1,726.50', '$1,726.75'])).to.be.true;
    expect(isEqual(jsort.currency(['£173.00', '£1,730.00', '£17.30']).reverse(), ['£1,730.00', '£173.00', '£17.30'])).to.be.true;
    expect(isEqual(jsort.currency(['€1.00', '€0.00', '€0.50']), ['€0.00', '€0.50', '€1.00'])).to.be.true;
    expect(isEqual(jsort.currency(['AUD 1,726.75', 'AUD 1,726.50', 'AUD 1,720.99']), ['AUD 1,720.99', 'AUD 1,726.50', 'AUD 1,726.75'])).to.be.true;
    expect(isEqual(jsort.currency(['NZD 1,726.75', 'NZD 1,726.50', 'NZD 1,720.99']), ['NZD 1,720.99', 'NZD 1,726.50', 'NZD 1,726.75'])).to.be.true;
  });

  it('sorts date arrays properly', () => {
    expect(isEqual(jsort.date(['2015-02-04', '2015-02-02', '2017-02-01']), ['2015-02-02', '2015-02-04', '2017-02-01'])).to.be.true;
    expect(isEqual(jsort.date(['01/31/2015', '01/30/2015', '01/31/2016']), ['01/30/2015', '01/31/2015', '01/31/2016'])).to.be.true;
    expect(isEqual(jsort.date(['01/31/2015', '01/30/2015', '01/31/2016']), ['01/30/2015', '01/31/2015', '01/31/2016'])).to.be.true;
    expect(isEqual(jsort.date(['2015-02-04', '2015-02-02', '2017-02-01']).reverse(), ['2017-02-01', '2015-02-04', '2015-02-02'])).to.be.true;
    expect(isEqual(jsort.date(['2015-01-31', '01/30/2015', 'Sat, Jan 3, 2015', 'January 31, 2014']), ['January 31, 2014', 'Sat, Jan 3, 2015', '01/30/2015', '2015-01-31'])).to.be.true;
  });

  it('sorts collections of objects properly', () => {
    expect(isEqual(jsort.text([{age:25,name:'Ted'}, {age:10,name:'Mario'}, {age:50,name:'Homer'}], 'name'), [{age:50,name:'Homer'}, {age:10,name:'Mario'}, {age:25,name:'Ted'}])).to.be.true;
    expect(isEqual(jsort.numeric([{age:25,name:'Ted'}, {age:10,name:'Mario'}, {age:50,name:'Homer'}], 'age'), [{age:10,name:'Mario'}, {age:25,name:'Ted'}, {age:50,name:'Homer'}])).to.be.true;
    expect(isEqual(jsort.currency([{salary:'$100,000.00',name:'Ted'}, {salary:'$80,000.00',name:'Mario'}, {salary:'$75,000.00',name:'Homer'}], 'salary'), [{salary:'$75,000.00',name:'Homer'}, {salary:'$80,000.00',name:'Mario'}, {salary:'$100,000.00',name:'Ted'}])).to.be.true;
    expect(isEqual(jsort.date([{dob:'01/01/2010',name:'Ted'}, {dob:'01/01/2001',name:'Mario'}, {dob:'01/01/2009',name:'Homer'}], 'dob'), [{dob:'01/01/2001',name:'Mario'}, {dob:'01/01/2009',name:'Homer'}, {dob:'01/01/2010',name:'Ted'}])).to.be.true;
  });
});
