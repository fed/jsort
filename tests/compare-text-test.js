jest.dontMock('../utils/compare-text');

var compareText = require('../utils/compare-text');
const BEFORE = -1;
const AFTER = 1;
const THE_SAME = 0;

describe('compare-text', function () {
  it('compares strings properly', function () {
    expect(compareText('John', 'Doe')).toBe(AFTER);
    expect(compareText('New', 'Zealand')).toBe(BEFORE);
  });

  it('compares strings starting with the same letter', function () {
    expect(compareText('Walter', 'White')).toBe(BEFORE);
    expect(compareText('Kangaroo', 'Kangaroo')).toBe(THE_SAME);
  });

  it('compares words with the same root', function () {
    expect(compareText('Robotic', 'Robot')).toBe(AFTER);
    expect(compareText('Robot', 'Robotic')).toBe(BEFORE);
    expect(compareText('Electricity', 'Electric')).toBe(AFTER);
    expect(compareText('Electric', 'Electricity')).toBe(BEFORE);
  });
});
