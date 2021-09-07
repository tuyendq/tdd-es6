import { expect } from 'chai';
import isAnagram from './anagram';

describe('Check if two string are anagram', () => {

  it('should return true for "silent" and "listen"', () => {
    const expected = true;
    const actual = isAnagram('silent', 'listen');
    expect(actual).to.deep.equal(expected);
  });

  it('should return false for "silent" and "listens"', () => {
    const expected = false;
    const actual = isAnagram('silent', 'listens');
    expect(actual).to.deep.equal(expected);
  });

  it('should return false for "triangle" and "integral"', () => {
    const expected = true;
    const actual = isAnagram('triangle', 'integral');
    expect(actual).to.deep.equal(expected);
  });  

});