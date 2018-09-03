'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _login = require('./idukay/login');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isBrowser = typeof window !== 'undefined';

if (isBrowser) {
  window.idukay = _login2.default;
}

exports.default = _login2.default;