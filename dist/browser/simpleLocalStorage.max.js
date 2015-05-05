(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.simpleLocalStorage = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
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

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./src/simple-local-storage.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

'use strict';

var SimpleStore = (function () {
  function SimpleStore(localStorage) {
    _classCallCheck(this, SimpleStore);

    this._localStorage = localStorage;
  }

  _createClass(SimpleStore, [{
    key: 'set',
    value: function set(key, value) {
      if (this._isObjectOrArray(value)) {
        value = this._stringify(value);
      }
      this._localStorage.setItem(key, value);
    }
  }, {
    key: 'get',
    value: function get(key) {
      var value = this._localStorage.getItem(key);
      try {
        return JSON.parse(value);
      } catch (e) {
        return value;
      }
    }
  }, {
    key: 'remove',
    value: function remove(key) {
      this._localStorage.removeItem(key);
    }
  }, {
    key: '_isObjectOrArray',
    value: function _isObjectOrArray(value) {
      return typeof value === 'object';
    }
  }, {
    key: '_stringify',
    value: function _stringify(value) {
      return JSON.stringify(value);
    }
  }]);

  return SimpleStore;
})();

exports['default'] = SimpleStore;
module.exports = exports['default'];

},{}]},{},[1])(1)
});