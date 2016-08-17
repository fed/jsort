jest.autoMockOff();

var jsort = require('../src/jsort');

describe('jsort', function () {
  it('sorts numeric arrays properly', function () {
    expect(jsort.numeric([2, 1, 3])).toEqual([1, 2, 3]);
    expect(jsort.numeric([5, 7, 6]).reverse()).toEqual([7, 6, 5]);
    expect(jsort.numeric([1, 10, 11, 110, 111, 0])).toEqual([0, 1, 10, 11, 110, 111]);
    expect(jsort.numeric([20, 2.01, 2.001])).toEqual([2.001, 2.01, 20]);
    expect(jsort.numeric([15.005, 15.006, 15.0001]).reverse()).toEqual([15.006, 15.005, 15.0001]);
    expect(jsort.numeric([1.1, 1.15, 1.20, 10.1, 11.1, 0.01])).toEqual([0.01, 1.1, 1.15, 1.2, 10.1, 11.1]);
  });

  it('sorts text arrays properly', function () {
    expect(jsort.text(['Australia', 'Argentina', 'New Zealand', 'Austria', 'Canada'])).toEqual(['Argentina', 'Australia', 'Austria', 'Canada', 'New Zealand']);
    expect(jsort.text(['Welcome', 'to', 'New', 'Zealand'])).toEqual(['New', 'to', 'Welcome', 'Zealand']);
    expect(jsort.text(['I', 'am', 'Yoda']).reverse()).toEqual(['Yoda', 'I', 'am']);
  });

  it('sorts currency arrays properly', function () {
    expect(jsort.currency(['$1,726.75', '$1,726.50', '$1,720.99'])).toEqual(['$1,720.99', '$1,726.50', '$1,726.75']);
    expect(jsort.currency(['£173.00', '£1,730.00', '£17.30']).reverse()).toEqual(['£1,730.00', '£173.00', '£17.30']);
    expect(jsort.currency(['€1.00', '€0.00', '€0.50'])).toEqual(['€0.00', '€0.50', '€1.00']);
    expect(jsort.currency(['AUD 1,726.75', 'AUD 1,726.50', 'AUD 1,720.99'])).toEqual(['AUD 1,720.99', 'AUD 1,726.50', 'AUD 1,726.75']);
    expect(jsort.currency(['NZD 1,726.75', 'NZD 1,726.50', 'NZD 1,720.99'])).toEqual(['NZD 1,720.99', 'NZD 1,726.50', 'NZD 1,726.75']);

  });

  it('sorts date arrays properly', function () {
    expect(jsort.date(['2015-02-04', '2015-02-02', '2017-02-01'])).toEqual(['2015-02-02', '2015-02-04', '2017-02-01']);
    expect(jsort.date(['01/31/2015', '01/30/2015', '01/31/2016'])).toEqual(['01/30/2015', '01/31/2015', '01/31/2016']);
    expect(jsort.date(['01/31/2015', '01/30/2015', '01/31/2016'])).toEqual(['01/30/2015', '01/31/2015', '01/31/2016']);
    expect(jsort.date(['2015-02-04', '2015-02-02', '2017-02-01']).reverse()).toEqual(['2017-02-01', '2015-02-04', '2015-02-02']);
    expect(jsort.date(['2015-01-31', '01/30/2015', 'Sat, Jan 3, 2015', 'January 31, 2014'])).toEqual(['January 31, 2014', 'Sat, Jan 3, 2015', '01/30/2015', '2015-01-31']);
  });

  it('sorts collections of objects properly', function () {
    expect(jsort.text([{age:25,name:'Ted'}, {age:10,name:'Mario'}, {age:50,name:'Homer'}], 'name')).toEqual([{age:50,name:'Homer'}, {age:10,name:'Mario'}, {age:25,name:'Ted'}]);
    expect(jsort.numeric([{age:25,name:'Ted'}, {age:10,name:'Mario'}, {age:50,name:'Homer'}], 'age')).toEqual([{age:10,name:'Mario'}, {age:25,name:'Ted'}, {age:50,name:'Homer'}]);
    expect(jsort.currency([{salary:'$100,000.00',name:'Ted'}, {salary:'$80,000.00',name:'Mario'}, {salary:'$75,000.00',name:'Homer'}], 'salary')).toEqual([{salary:'$75,000.00',name:'Homer'}, {salary:'$80,000.00',name:'Mario'}, {salary:'$100,000.00',name:'Ted'}]);
    expect(jsort.date([{dob:'01/01/2010',name:'Ted'}, {dob:'01/01/2001',name:'Mario'}, {dob:'01/01/2009',name:'Homer'}], 'dob')).toEqual([{dob:'01/01/2001',name:'Mario'}, {dob:'01/01/2009',name:'Homer'}, {dob:'01/01/2010',name:'Ted'}]);
  });
});
