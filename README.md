[js-fixed-disjoint-set](http://aureooms.github.io/js-fixed-disjoint-set)
==

Disjoint-set data structure code bricks for JavaScript. Parent is
[aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

```js
find( a ) === find( b ) ; // false
union( A , B ) ;
find( a ) === find( b ) ; // true
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-fixed-disjoint-set.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-fixed-disjoint-set/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-fixed-disjoint-set.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fixed-disjoint-set)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-fixed-disjoint-set.svg?style=flat)](http://bower.io/search/?q=aureooms-js-fixed-disjoint-set)
[![Build Status](http://img.shields.io/travis/aureooms/js-fixed-disjoint-set.svg?style=flat)](https://travis-ci.org/aureooms/js-fixed-disjoint-set)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-fixed-disjoint-set.svg?style=flat)](https://coveralls.io/r/aureooms/js-fixed-disjoint-set)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-fixed-disjoint-set.svg?style=flat)](https://david-dm.org/aureooms/js-fixed-disjoint-set#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-fixed-disjoint-set.svg?style=flat)](https://david-dm.org/aureooms/js-fixed-disjoint-set#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-fixed-disjoint-set.svg?style=flat)](https://codeclimate.com/github/aureooms/js-fixed-disjoint-set)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-fixed-disjoint-set.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-fixed-disjoint-set)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-fixed-disjoint-set.svg?style=flat)](https://github.com/aureooms/js-fixed-disjoint-set/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-fixed-disjoint-set.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-fixed-disjoint-set)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```sh
jspm install github:aureooms/js-fixed-disjoint-set
# or
jspm install npm:aureooms-js-fixed-disjoint-set
```
### duo
No install step needed for duo!

### component
```sh
component install aureooms/js-fixed-disjoint-set
```

### bower
```sh
bower install aureooms-js-fixed-disjoint-set
```

### ender
```sh
ender add aureooms-js-fixed-disjoint-set
```

### jam
```sh
jam install aureooms-js-fixed-disjoint-set
```

### spm
```sh
spm install aureooms-js-fixed-disjoint-set --save
```

### npm
```sh
npm install aureooms-js-fixed-disjoint-set --save
```

## Require
### jspm
```js
let disjointset = require( "github:aureooms/js-fixed-disjoint-set" ) ;
// or
import disjointset from 'aureooms-js-fixed-disjoint-set' ;
```
### duo
```js
let disjointset = require( "aureooms/js-fixed-disjoint-set" ) ;
```

### component, ender, spm, npm
```js
let disjointset = require( "aureooms-js-fixed-disjoint-set" ) ;
```

### bower
The script tag exposes the global variable `disjointset`.
```html
<script src="bower_components/aureooms-js-fixed-disjoint-set/js/dist/disjoint-set.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-fixed-disjoint-set" ] , function ( disjointset ) { ... } ) ;
```


## Use

```js
// can choose between 8 different implementations
//   - ForestAmortizedHalving
//   - ForestAmortizedRecursive
//   - ForestAmortizedSplitting
//   - ForestAmortizedTwoPasses
//   - Forest
//   - LinkedList
//   - LinkedListWithHeadAndLength
//   - LinkedListWithHead

let { makeset , union , find } = disjointset.ForestAmortizedHalving ;

let a , b , c , A , B , C ;

A = a = makeset( ) ;
B = b = makeset( ) ;
C = c = makeset( ) ;

find( a ) === find( a ) ; // true
find( a ) === find( b ) ; // false
find( a ) === find( c ) ; // false

find( b ) === find( a ) ; // false
find( b ) === find( b ) ; // true
find( b ) === find( c ) ; // false

find( c ) === find( a ) ; // false
find( c ) === find( b ) ; // false
find( c ) === find( c ) ; // true

A = union( A , B ) ; // union( B , A ) would work too
delete B ;

find( a ) === find( a ) ; // true
find( a ) === find( b ) ; // true
find( a ) === find( c ) ; // false

find( b ) === find( a ) ; // true
find( b ) === find( b ) ; // true
find( b ) === find( c ) ; // false

find( c ) === find( a ) ; // false
find( c ) === find( b ) ; // false
find( c ) === find( c ) ; // true
```

***( forked from [js-disjoint-set](https://github.com/aureooms/js-disjoint-set) )***
