'use strict';

export default class SimpleStore {
  constructor(localStorage) {
    this._localStorage = localStorage;
  }

  set(key, value) {
    if(this._isObjectOrArray(value)) {
      value = this._stringify(value);
    }
    this._localStorage.setItem(key, value);
  }

  get(key) {
    var value = this._localStorage.getItem(key);
    try {
      return JSON.parse(value);
    } catch(e) {
      return value;
    }
  }

  remove(key) {
    this._localStorage.removeItem(key);
  }

  clear() {
    this._localStorage.clear();
  }

  _isObjectOrArray(value) {
    return typeof value === 'object';
  }

  _stringify(value) {
    return JSON.stringify(value);
  }
}
