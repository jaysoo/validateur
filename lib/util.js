'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodashFlow = require('lodash.flow');

var _lodashFlow2 = _interopRequireDefault(_lodashFlow);

var and = function and() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = fns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var f = _step.value;

        if (!f(x)) return false;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator['return']) {
          _iterator['return']();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return true;
  };
};

var dot = function dot(prop) {
  return function (obj) {
    return obj[prop];
  };
};

var invoke = function invoke(fName) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return function (obj) {
    var _obj$fName;

    return (_obj$fName = obj[fName]).call.apply(_obj$fName, [obj].concat(args));
  };
};

var not = function not(f) {
  return function (x) {
    return !f(x);
  };
};

var optional = function optional(f) {
  return function (x) {
    return x === null || typeof x === 'undefined' || x === '' ? true : f(x);
  };
};

var or = function or() {
  for (var _len3 = arguments.length, fns = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    fns[_key3] = arguments[_key3];
  }

  return function (x) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = fns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var f = _step2.value;

        if (f(x)) return true;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2['return']) {
          _iterator2['return']();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return false;
  };
};

exports.and = and;
exports.dot = dot;
exports.flow = _lodashFlow2['default'];
exports.invoke = invoke;
exports.not = not;
exports.optional = optional;
exports.or = or;