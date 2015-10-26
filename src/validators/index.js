import { lang } from '../core';

export * from './length';

export const string = lang.isString;

export const number = lang.isNumber;

export const bool = lang.isBoolean;

export const optional = f => x => lang.isBlank(x) || f(x);

export const required = f => x => lang.isPresent(x) && f(x);

export const combine = validators => {
  return x => {
    return Object.keys(validators).reduce((result, k) => {
      result[k] = validators[k](x[k]);
      return result;
    }, {});
  }
};

export const reduce = result => {
  for (let k of Object.keys(result)) {
    if (!result[k]) {
      return false;
    }
  }
  return true;
};
