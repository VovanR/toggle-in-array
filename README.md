# toggle-in-array

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Add or remove item from array

## Install

```shell
npm install --save toggle-in-array
```

## Usage

```js
var toggleInArray = require('toggle-in-array');

toggleInArray([1, 2, 3], 2)
//=> [1, 3]

toggleInArray([1, 2, 3], 4)
//=> [1, 2, 3, 4]

toggleInArray(
  [{v: 1}, {v: 2}, {v: 3}],
  {v: 2},
  (a, b) => a.v === b.v
)
//=> [{v: 1}, {v: 3}]
```

## API

### `toggleInArray(arr, value, [predicate])`

Returns an `Array` with `value` if `arr` is not includes this `value`<br>
Returns an `Array` without `value` if `arr` is includes this `value`

#### arr
*Required*<br>
Type: `Array`

Array with values needs to toggle

#### value
*Required*<br>
Type: `Array`

Value to toggle in `arr`

#### predicate
Type: `Function`<br>
Default: `(a, b) => a === b` *Strict equality comparison*

Function that compare each `arr` item to equal `value`

## License
MIT © [Vladimir Rodkin](https://github.com/VovanR)

[commitizen-url]: https://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/xojs/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/toggle-in-array
[npm-image]: https://img.shields.io/npm/v/toggle-in-array.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/toggle-in-array
[travis-image]: https://img.shields.io/travis/VovanR/toggle-in-array.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/toggle-in-array
[coveralls-image]: https://img.shields.io/coveralls/VovanR/toggle-in-array.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/toggle-in-array
[depstat-image]: https://david-dm.org/VovanR/toggle-in-array.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/toggle-in-array
[depstat-dev-image]: https://david-dm.org/VovanR/toggle-in-array/dev-status.svg?style=flat-square
