'use strict';

var SimpleStore = require('../src/simple-local-storage');

describe('SimpleStore', function() {

  var store, localStorageMock;
  const testData = '{"foo":"bar"}';
  beforeEach(function() {
    localStorageMock = {
      setItem: sinon.stub(),
      getItem: sinon.stub(),
      removeItem: sinon.stub()
    };
    store = new SimpleStore(localStorageMock);
  });

  it('sets strings', function() {
    const args = ['key', '1'];
    store.set.apply(store, args);
    expect(localStorageMock.setItem.lastCall.args).toEqual(args);
  });

  it('stringifies objects and sets them', function() {
    const data = {foo: 'bar'};
    store.set('key', data);
    expect(localStorageMock.setItem.lastCall.args[1]).toEqual(JSON.stringify(data));
  });

  it('stringifies arrays and sets them', function() {
    const data = ['foo', 'bar'];
    store.set('key', data);
    expect(localStorageMock.setItem.lastCall.args[1]).toEqual(JSON.stringify(data));
  });

  it('gets strings from localStorage', function() {
    localStorageMock.getItem = sinon.stub().returns('foo');
    var data = store.get('key');
    expect(data).toEqual('foo');
  });

  it('gets objects from localStorage and parses them', function() {
    localStorageMock.getItem = sinon.stub().returns(testData);
    var data = store.get('key');
    expect(data).toEqual(JSON.parse(testData));
  });

  it('removes items from localStorage', function() {
    var key = 'key';
    store.remove(key);
    expect(localStorageMock.removeItem.lastCall.args[0]).toBe(key);
  })

});
