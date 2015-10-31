jest.dontMock('../jsort');

var jsort = require('../jsort');

describe('jsort', function () {
  it('sorts numeric arrays properly', function () {
    expect(jsort([2, 1, 3], 'number')).toEqual([1, 2, 3]);
    expect(jsort([5, 7, 6], 'number', true)).toEqual([7, 6, 5]);
  });
});
