jest.dontMock('../jsort');

var jsort = require('../jsort');

describe('jsort', function () {
  it('sorts numeric arrays properly', function () {
    expect(jsort.numeric([2, 1, 3])).toEqual([1, 2, 3]);
    expect(jsort.numeric([5, 7, 6]).reverse()).toEqual([7, 6, 5]);
    expect(jsort.numeric([20, 2.01, 2.001])).toEqual([2.001, 2.01, 20]);
    expect(jsort.numeric([15.005, 15.006, 15.0001]).reverse()).toEqual([15.006, 15.005, 15.0001]);
  });

  it('sorts text arrays properly', function () {
    expect(jsort.text(['Welcome', 'to', 'New', 'Zealand'])).toEqual(['New', 'to', 'Welcome', 'Zealand']);
    expect(jsort.text(['I', 'am', 'Yoda']).reverse()).toEqual(['Yoda', 'I', 'am']);
  });

  it('sorts currency arrays properly', function () {
    expect(jsort.currency(['$1,726.75', '$1,726.50', '$1,720.99'])).toEqual(['$1,720.99', '$1,726.50', '$1,726.75']);
    expect(jsort.currency(['£173.00', '£1,730.00', '£17.30']).reverse()).toEqual(['£1,730.00', '£173.00', '£17.30']);
    expect(jsort.currency(['€1.00', '€0.00', '€0.50'])).toEqual(['€0.00', '€0.50', '€1.00']);
  });

  it('sorts date arrays properly', function () {
    expect(jsort.date(['01/31/2015', '01/30/2015', '01/31/2016'])).toEqual(['01/30/2015', '01/31/2015', '01/31/2016']);
    expect(jsort.date(['2015-02-04', '2015-02-02', '2017-02-01']).reverse()).toEqual(['2017-02-01', '2015-02-04', '2015-02-02']);
  });
});
