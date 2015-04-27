[js-disjoint-set](http://aureooms.github.io/js-disjoint-set)
==

Disjoint-set data structure code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-disjoint-set.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-disjoint-set/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-disjoint-set.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-disjoint-set)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-disjoint-set.svg?style=flat)](http://bower.io/search/?q=aureooms-js-disjoint-set)
[![Build Status](http://img.shields.io/travis/aureooms/js-disjoint-set.svg?style=flat)](https://travis-ci.org/aureooms/js-disjoint-set)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-disjoint-set.svg?style=flat)](https://coveralls.io/r/aureooms/js-disjoint-set)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-disjoint-set.svg?style=flat)](https://david-dm.org/aureooms/js-disjoint-set#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-disjoint-set.svg?style=flat)](https://david-dm.org/aureooms/js-disjoint-set#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-disjoint-set.svg?style=flat)](https://codeclimate.com/github/aureooms/js-disjoint-set)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-disjoint-set.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-disjoint-set)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-disjoint-set.svg?style=flat)](https://github.com/aureooms/js-disjoint-set/issues)
[![Inline docs](http://inch-ci.org/github/aureooms/js-disjoint-set.svg?branch=master&style=shields)](http://inch-ci.org/github/aureooms/js-disjoint-set)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).
<BLANKLINE>
## Install
<BLANKLINE>
### jspm
```sh
jspm install github:aureooms/js-disjoint-set
# or
jspm install npm:aureooms-js-disjoint-set
```
### duo
No install step needed for duo!
<BLANKLINE>
### component
```sh
component install aureooms/js-disjoint-set
```
<BLANKLINE>
### bower
```sh
bower install aureooms-js-disjoint-set
```
<BLANKLINE>
### ender
```sh
ender add aureooms-js-disjoint-set
```
<BLANKLINE>
### jam
```sh
jam install aureooms-js-disjoint-set
```
<BLANKLINE>
### spm
```sh
spm install aureooms-js-disjoint-set --save
```
<BLANKLINE>
### npm
```sh
npm install aureooms-js-disjoint-set --save
```
<BLANKLINE>
## Require
### jspm
```js
let disjointset = require( "github:aureooms/js-disjoint-set" ) ;
// or
import disjointset from 'aureooms-js-disjoint-set' ;
```
### duo
```js
let disjointset = require( "aureooms/js-disjoint-set" ) ;
```
<BLANKLINE>
### component, ender, spm, npm
```js
let disjointset = require( "aureooms-js-disjoint-set" ) ;
```
<BLANKLINE>
### bower
The script tag exposes the global variable `disjointset`.
```html
<script src="bower_components/aureooms-js-disjoint-set/js/dist/disjoint-set.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).
<BLANKLINE>
### jam
```js
require( [ "aureooms-js-disjoint-set" ] , function ( disjointset ) { ... } ) ;
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

let makeset = disjointset.ForestAmortizedHalving.makeset ;
let union = disjointset.ForestAmortizedHalving.union ;
let find = disjointset.ForestAmortizedHalving.find ;

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
