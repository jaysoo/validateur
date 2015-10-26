'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _util = require('./util');

var gte = function gte(n) {
  return function (x) {
    return x >= n;
  };
};
exports.gte = gte;
var gt = function gt(n) {
  return function (x) {
    return x > n;
  };
};
exports.gt = gt;
var lte = function lte(n) {
  return function (x) {
    return x <= n;
  };
};
exports.lte = lte;
var lt = function lt(n) {
  return function (x) {
    return x < n;
  };
};

exports.lt = lt;
var range = function range(n, m) {
  return (0, _util.and)(gte(n), lte(m));
};
exports.range = range;