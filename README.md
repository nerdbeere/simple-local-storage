# Simple Local Storage

A simple localStorage abstraction to get and set strings, arrays and objects from and to localStorage.

**Warning:** This is currently only working in the browser because localStorage is not implemented in nodejs/iojs.

## Installation

`npm install --save simple-local-storage`

## Api

### `store.get(key)`

#### Parameters:

Name | Type | Description
-----|------|------------
key | `string` | The key of the item

Retrieve an item from the store.

### `store.set(key, value)`

#### Parameters:

Name | Type | Description
-----|------|------------
key | `string` | The key of the item
value | `array`, `object`, `string`, `number` | The actual value you want to save in the store

Save an item to the store.

### `store.remove(key)`

#### Parameters:

Name | Type | Description
-----|------|------------
key | `string` | The key of the item

Remove an item from the store.

## License

The MIT License (MIT)

Copyright (c) 2015 Julian Hollmann

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
