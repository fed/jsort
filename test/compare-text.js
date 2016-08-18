import {expect} from 'chai';
import {compareText} from '../src/utils/comparators';

const BEFORE = -1;
const AFTER = 1;
const SAME = 0;

describe('Text Comparisons', () => {
  it('compares strings properly', () => {
    expect(compareText('John', 'Doe')).to.equal(AFTER);
    expect(compareText('New', 'Zealand')).to.equal(BEFORE);
  });

  it('compares strings starting with the same letter', () => {
    expect(compareText('Spanish', 'Spain')).to.equal(AFTER);
    expect(compareText('Australia', 'Austria')).to.equal(BEFORE);
    expect(compareText('Bear', 'Beer')).to.equal(BEFORE);
  });

  it('compares identical strings', () => {
    expect(compareText('Kangaroo', 'Kangaroo')).to.equal(SAME);
    expect(compareText('Kangaroo', 'Kangaroo')).to.equal(SAME);
  });

  it('compares words with the same root', () => {
    expect(compareText('Milan', 'Milano')).to.equal(BEFORE);
    expect(compareText('Walter', 'White')).to.equal(BEFORE);
    expect(compareText('Robotic', 'Robot')).to.equal(AFTER);
    expect(compareText('Robot', 'Robotic')).to.equal(BEFORE);
    expect(compareText('Electricity', 'Electric')).to.equal(AFTER);
    expect(compareText('Electric', 'Electricity')).to.equal(BEFORE);
    expect(compareText('United Kingdom', 'United States')).to.equal(BEFORE);
  });
});
