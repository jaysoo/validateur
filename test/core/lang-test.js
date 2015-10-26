import * as lang from '../../src/core/lang';
import { expect } from 'chai';

describe('lang', () => {
  describe('isBoolean', () => {
    it('returns true when value is a boolean', () => {
      expect(lang.isBoolean(true)).to.be.true;
      expect(lang.isBoolean(false)).to.be.true;
    });

    it('returns false when value not empty', () => {
      expect(lang.isBoolean(0)).to.be.false;
    });
  });

  describe('isEmpty', () => {
    it('returns true when value is empty', () => {
      expect(lang.isEmpty('')).to.be.true;
      expect(lang.isEmpty([])).to.be.true;
    });

    it('returns false when value not empty', () => {
      expect(lang.isEmpty(['a'])).to.be.false;
      expect(lang.isEmpty('hello')).to.be.false;
    });
  });

  describe('isNaN', () => {
    it('returns true when value is NaN', () => {
      expect(lang.isNaN(NaN)).to.be.true;
    });

    it('returns false when value not NaN', () => {
      expect(lang.isNaN(1)).to.be.false;
    });
  });

  describe('isNumber', () => {
    it('returns true when value is a number', () => {
      expect(lang.isNumber(1)).to.be.true;
      expect(lang.isNumber(NaN)).to.be.true;
    });

    it('returns false when value not a number', () => {
      expect(lang.isNumber(null)).to.be.false;
      expect(lang.isNumber(undefined)).to.be.false;
      expect(lang.isNumber('hello')).to.be.false;
      expect(lang.isNumber(true)).to.be.false;
      expect(lang.isNumber(/123/)).to.be.false;
    });
  });

  describe('isPresent', () => {
    it('returns true only when value is not null or undefined', () => {
      expect(lang.isPresent('present')).to.be.true;
      expect(lang.isPresent(null)).to.be.false;
      expect(lang.isPresent(undefined)).to.be.false;
    });
  });

  describe('isString', () => {
    it('returns true when value is a string', () => {
      expect(lang.isString('')).to.be.true;
      expect(lang.isString('hello')).to.be.true;
    });

    it('returns false when value not a string', () => {
      expect(lang.isString(null)).to.be.false;
      expect(lang.isString(undefined)).to.be.false;
      expect(lang.isString(0)).to.be.false;
      expect(lang.isString(true)).to.be.false;
      expect(lang.isString(/123/)).to.be.false;
    });
  });

  describe('isPresent', () => {
    it('returns true when value is present', () => {
      expect(lang.isPresent(false)).to.be.true;
      expect(lang.isPresent(0)).to.be.true;
    });

    it('returns false when value not present', () => {
      expect(lang.isPresent(null)).to.be.false;
      expect(lang.isPresent(undefined)).to.be.false;
      expect(lang.isPresent('')).to.be.false;
    });
  });

  describe('isBlank', () => {
    it('returns true when value is blank', () => {
      expect(lang.isBlank(null)).to.be.true;
      expect(lang.isBlank(undefined)).to.be.true;
      expect(lang.isBlank('')).to.be.true;
    });

    it('returns false when value not blank', () => {
      expect(lang.isBlank(false)).to.be.false;
      expect(lang.isBlank(0)).to.be.false;
    });
  });
});