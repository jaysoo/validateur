'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _util = require('./util');

var _lang = require('./lang');

var _number = require('./number');

var maxLength = function maxLength(n) {
  return (0, _util.flow)((0, _util.dot)('length'), (0, _util.and)(_lang.isNumber, (0, _number.lte)(n)));
};

exports.maxLength = maxLength;
var minLength = function minLength(n) {
  return (0, _util.flow)((0, _util.dot)('length'), (0, _util.and)(_lang.isNumber, (0, _number.gte)(n)));
};
exports.minLength = minLength;