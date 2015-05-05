'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = SimpleStoreFactory;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _srcSimpleLocalStorageJs = require('./src/simple-local-storage.js');

var _srcSimpleLocalStorageJs2 = _interopRequireDefault(_srcSimpleLocalStorageJs);

function SimpleStoreFactory(options) {
  options = options || {};
  var store = global.localStorage;
  if (options.sessionStorage === true) {
    store = global.sessionStorage;
  }

  return new _srcSimpleLocalStorageJs2['default'](store);
}

module.exports = exports['default'];
