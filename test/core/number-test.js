import { expect } from 'chai';
import * as number from '../../src/core/number';

describe('number', () => {
  describe('gte', () => {
    it('return true only if number >= n', () => {
      const f = number.gte(5);
      expect(f(5)).to.be.true;
      expect(f(6)).to.be.true;
      expect(f(4)).to.be.false;
    });
  });

  describe('gt', () => {
    it('return true only if number > n', () => {
      const f = number.gt(5);
      expect(f(5)).to.be.false;
      expect(f(6)).to.be.true;
      expect(f(4)).to.be.false;
    });
  });

  describe('lte', () => {
    it('return true only if number <= n', () => {
      const f = number.lte(5);
      expect(f(5)).to.be.true;
      expect(f(6)).to.be.false;
      expect(f(4)).to.be.true;
    });
  });

  describe('lt', () => {
    it('return true only if number < n', () => {
      const f = number.lt(5);
      expect(f(5)).to.be.false;
      expect(f(6)).to.be.false;
      expect(f(4)).to.be.true;
    });
  });

  describe('range', () => {
    it('return true only if n <= number <= m', () => {
      const f = number.range(1, 5);
      expect(f(0)).to.be.false;
      expect(f(1)).to.be.true;
      expect(f(2)).to.be.true;
      expect(f(3)).to.be.true;
      expect(f(4)).to.be.true;
      expect(f(5)).to.be.true;
      expect(f(6)).to.be.false;
    });
  });
});