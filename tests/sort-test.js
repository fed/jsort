jest.dontMock('../sort');

var sort = require('../sort');

describe('sort', function () {
  it('sorts numeric arrays properly', function () {
    expect(sort([2, 1, 3], 'number')).toEqual([1, 2, 3]);
    expect(sort([5, 7, 6], 'number', true)).toEqual([7, 6, 5]);
  });
});
