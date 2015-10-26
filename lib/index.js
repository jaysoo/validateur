'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _lang = require('./lang');

var lang = _interopRequireWildcard(_lang);

var _length = require('./length');

var length = _interopRequireWildcard(_length);

var _number = require('./number');

var number = _interopRequireWildcard(_number);

var _string = require('./string');

var string = _interopRequireWildcard(_string);

var _util = require('./util');

_defaults(exports, _interopExportWildcard(_util, _defaults));

exports.lang = lang;
exports.length = length;
exports.number = number;
exports.string = string;