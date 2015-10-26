import flow from 'lodash.flow';

import { isBlank } from './core/lang';

const and = (...fns) => x => {
  for (let f of fns) {
    if (!f(x)) return false;
  }
  return true;
};

const dot = prop => obj => obj[prop];

const invoke = (fName, ...args) => obj => obj[fName].call(obj, ...args);

const not = f => x => !f(x);

const optional = f => x => isBlank(x) || f(x);

const or = (...fns) => x => {
  for (let f of fns) {
    if (f(x)) return true;
  }
  return false;
};

export {
  and,
  dot,
  flow,
  invoke,
  not,
  optional,
  or
};
