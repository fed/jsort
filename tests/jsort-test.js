jest.dontMock('../jsort');

var jsort = require('../jsort');

describe('jsort', function () {
  it('sorts numeric arrays properly', function () {
    expect(jsort([2, 1, 3], 'number')).toEqual([1, 2, 3]);
    expect(jsort([5, 7, 6], 'number', true)).toEqual([7, 6, 5]);
    expect(jsort([20, 2.01, 2.001], 'number')).toEqual([2.001, 2.01, 20]);
    expect(jsort([15.005, 15.006, 15.0001], 'number', true)).toEqual([15.006, 15.005, 15.0001]);
  });

  it('sorts text arrays properly', function () {
    expect(jsort(['Welcome', 'to', 'New', 'Zealand'], 'text')).toEqual(['New', 'to', 'Welcome', 'Zealand']);
    expect(jsort(['I', 'am', 'Yoda'], 'text', true)).toEqual(['Yoda', 'I', 'am']);
  });

  it('sorts date arrays properly', function () {
    expect(jsort(['01/31/2015', '01/30/2015', '01/31/2016'], 'date')).toEqual(['01/30/2015', '01/31/2015', '01/31/2016']);
    expect(jsort(['2015-02-04', '2015-02-02', '2017-02-01'], 'date', true)).toEqual(['2017-02-01', '2015-02-04', '2015-02-02']);
  });

  it('sorts currency arrays properly', function () {
    expect(jsort(['$1,726.75', '$1,726.50', '$1,720.99'], 'currency')).toEqual(['$1,720.99', '$1,726.50', '$1,726.75']);
    expect(jsort(['£173.00', '£1,730.00', '£17.30'], 'currency', true)).toEqual(['£1,730.00', '£173.00', '£17.30']);
    expect(jsort(['€1.00', '€0.00', '€0.50'], 'currency')).toEqual(['€0.00', '€0.50', '€1.00']);
  });
});
