import { expect } from 'chai';
import * as string from '../../src/core/string';

describe('string', () => {
  describe('nonEmptyString', () => {
    it('return true only if string is not empty', () => {
      expect(string.nonEmptyString('123')).to.be.true;
      expect(string.nonEmptyString('')).to.be.false;
    });
  });

  describe('match', () => {
    it('return true only if string matches regex', () => {
      const f = string.match(/^[a-z]{3}$/);
      expect(f('abc')).to.be.true;
      expect(f('xyz')).to.be.true;
      expect(f('abcd')).to.be.false;
      expect(f('123')).to.be.false;
    });
  });
});