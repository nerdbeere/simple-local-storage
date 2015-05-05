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