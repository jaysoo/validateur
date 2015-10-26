import { expect } from 'chai';
import * as length from '../../src/validators/length';

describe('length validators', () => {
  describe('maxLength', () => {
    it('return true if length <= n', () => {
      const f = length.maxLength(5);
      expect(f('1234')).to.be.true;
    });

    it('return false if length > n', () => {
      const f = length.maxLength(5);
      expect(f('123456')).to.be.false;
    });
  });

  describe('maxLength', () => {
    it('return true if length >= n', () => {
      const f = length.minLength(5);
      expect(f('12346')).to.be.true;
    });

    it('return false if length < n', () => {
      const f = length.minLength(5);
      expect(f('1234')).to.be.false;
    });
  });
});