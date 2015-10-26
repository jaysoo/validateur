import { expect } from 'chai';
import * as util from '../src/util';

describe('util', () => {
  describe('dot', () => {
    it('returns the property of object', () => {
      const f = util.dot('a');
      expect(f({ a: 1 })).to.equal(1);
    });
  });

  describe('invoke', () => {
    it('returns the result of the object method invocation', () => {
      const f = util.invoke('a', 1);
      expect(f({ a: x => x + x })).to.equal(2);
    });
  });

  describe('not', () => {
    it('returns the negation of value pased in', () => {
      expect(util.not(() => true)()).to.be.false;
      expect(util.not(() => false)()).to.be.true;
    });
  });

  describe('and', () => {
    it('returns true if all predicates return true', () => {
      const g = util.and(() => true, () => true, () => true);
      expect(g()).to.be.true;
    });

    it('returns false if any predicates return false', () => {
      const g = util.and(() => true, () => false, () => true);
      expect(g()).to.be.false;
    });
  });

  describe('or', () => {
    it('returns true if any predicates return true', () => {
      const g = util.or(() => false, () => true, () => true);
      expect(g()).to.be.true;
    });

    it('returns false if all predicates return false', () => {
      const g = util.or(() => false, () => false, () => false);
      expect(g()).to.be.false;
    });
  });
});