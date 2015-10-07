[js-fixed-disjoint-set](http://aureooms.github.io/js-fixed-disjoint-set)
==

Fixed-size-array-based disjoint-set data structure code bricks for JavaScript.
Parent is
[aureooms/js-data-structures](https://github.com/aureooms/js-data-structures).

```js
U.find( a ) === U.find( b ) ; // false
U.union( A , B ) ;
U.find( a ) === U.find( b ) ; // true
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
```terminal
jspm install github:aureooms/js-fixed-disjoint-set
# or
jspm install npm:aureooms-js-fixed-disjoint-set
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-fixed-disjoint-set
```

### bower
```terminal
bower install aureooms-js-fixed-disjoint-set
```

### ender
```terminal
ender add aureooms-js-fixed-disjoint-set
```

### jam
```terminal
jam install aureooms-js-fixed-disjoint-set
```

### spm
```terminal
spm install aureooms-js-fixed-disjoint-set --save
```

### npm
```terminal
npm install aureooms-js-fixed-disjoint-set --save
```

## Require
### jspm
```js
let fixeddisjointset = require( "github:aureooms/js-fixed-disjoint-set" ) ;
// or
import fixeddisjointset from 'aureooms-js-fixed-disjoint-set' ;
```
### duo
```js
let fixeddisjointset = require( "aureooms/js-fixed-disjoint-set" ) ;
```

### component, ender, spm, npm
```js
let fixeddisjointset = require( "aureooms-js-fixed-disjoint-set" ) ;
```

### bower
The script tag exposes the global variable `fixeddisjointset`.
```html
<script src="bower_components/aureooms-js-fixed-disjoint-set/js/dist/fixed-disjoint-set.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-fixed-disjoint-set" ] , function ( fixeddisjointset ) { ... } ) ;
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

let { Universe } = fixeddisjointset.ForestAmortizedHalving ;

let U = new Universe( 3 ) ;

let a , b , c , A , B , C ;

A = a = 0 ;
B = b = 1 ;
C = c = 2 ;

U.find( a ) === U.find( a ) ; // true
U.find( a ) === U.find( b ) ; // false
U.find( a ) === U.find( c ) ; // false

U.find( b ) === U.find( a ) ; // false
U.find( b ) === U.find( b ) ; // true
U.find( b ) === U.find( c ) ; // false

U.find( c ) === U.find( a ) ; // false
U.find( c ) === U.find( b ) ; // false
U.find( c ) === U.find( c ) ; // true

A = U.union( A , B ) ; // U.union( B , A ) would work too
delete B ;

U.find( a ) === U.find( a ) ; // true
U.find( a ) === U.find( b ) ; // true
U.find( a ) === U.find( c ) ; // false

U.find( b ) === U.find( a ) ; // true
U.find( b ) === U.find( b ) ; // true
U.find( b ) === U.find( c ) ; // false

U.find( c ) === U.find( a ) ; // false
U.find( c ) === U.find( b ) ; // false
U.find( c ) === U.find( c ) ; // true
```
