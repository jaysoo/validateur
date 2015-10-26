import { expect } from 'chai';
import * as v from '../../src/validators/index';

describe('validators index', () => {
  it('exposes aliases', () => {
    const optionalString = v.optional(v.string)
    expect(optionalString(null)).to.be.true;
    expect(optionalString(undefined)).to.be.true;
    expect(optionalString('')).to.be.true;
    expect(optionalString('123')).to.be.true;
    expect(optionalString(123)).to.be.false;
  });

  describe('combine', () => {
    const validate = v.combine({
      name: v.string,
      age: v.optional(v.number)
    });

    expect(validate({ name: 'Bob' })).to.eql({
      name: true,
      age: true
    });

    expect(validate({ name: 'Bob', age: 30 })).to.eql({
      name: true,
      age: true
    });

    expect(validate({ name: 'Bob', age: '30' })).to.eql({
      name: true,
      age: false
    });

    expect(validate({})).to.eql({
      name: false,
      age: true
    });

    expect(validate({ age: 30 })).to.eql({
      name: false,
      age: true
    });
  });

  describe('reduce', () => {
    it('returns true if all combined properties are valid', () => {
      expect(v.reduce({
        name: true,
        age: true
      })).to.be.true;
    });

    it('returns false if any combined properties are valid', () => {
      expect(v.reduce({
        name: false,
        age: true
      })).to.be.false;

      expect(v.reduce({
        name: true,
        age: false
      })).to.be.false;
    });
  });
});