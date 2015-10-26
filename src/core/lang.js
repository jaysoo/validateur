export const isEmpty = x => x.length === 0;

export const isString = x => typeof x === 'string';

export const isNumber = x => typeof x === 'number';

export const isNaN = x => isNumber(x) && x != +x;

export const isPresent = x => x !== null && typeof x !== 'undefined' && x !== '';

export const isBlank = x => !isPresent(x);

export const isBoolean = x => typeof x === 'boolean';
