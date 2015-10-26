'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _util = require('./util');

var isNull = function isNull(x) {
  return x === null;
};

exports.isNull = isNull;
var isUndefined = function isUndefined(x) {
  return typeof x === 'undefined';
};

exports.isUndefined = isUndefined;
var isEmpty = function isEmpty(x) {
  return x.length === 0;
};

exports.isEmpty = isEmpty;
var isString = function isString(x) {
  return typeof x === 'string';
};

exports.isString = isString;
var isNumber = function isNumber(x) {
  return typeof x === 'number';
};

exports.isNumber = isNumber;
var isNaN = function isNaN(x) {
  return isNumber(x) && x != +x;
};

exports.isNaN = isNaN;
var isPresent = (0, _util.and)((0, _util.not)(isNull), (0, _util.not)(isUndefined));
exports.isPresent = isPresent;