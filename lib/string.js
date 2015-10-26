'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _lang = require('./lang');

var _util = require('./util');

var nonEmptyString = (0, _util.and)(_lang.isString, (0, _util.not)(_lang.isEmpty));

exports.nonEmptyString = nonEmptyString;
var match = function match(regexp) {
  return (0, _util.and)(nonEmptyString, function (str) {
    return regexp.test(str);
  });
};
exports.match = match;