import * as lang from './core/lang';
import * as number from './core/number';
import * as string from './core/string';

import * as length from './validators/length';

import * as util from './util';

export default {
  // Aliases
  string: lang.isString,
  bool: lang.isBoolean,
  number: lang.isNumber,

  ...util,

  core: {
    lang,
    length,
    number,
    string
  }
};