(function(exports, undefined){

	'use strict';


/* js/src/adt */
/* js/src/adt/DisjointSetForest.js */
(function(exports){



var Node , union , find , makeset ;

Node = function ( value ) {
	this.parent = this ;
	this.value = value ;
} ;

union = function ( a , b ) {

	find( a ).parent = find( b ) ;

} ;

find = function ( node ) {

	while ( node !== node.parent ) {
		node = node.parent ;
	}

	return node ;

} ;

makeset = function ( value ) {

	return new Node( value ) ;

} ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['DisjointSetForest'] = {});
/* js/src/adt/DisjointSetLinkedList.js */
(function(exports){



var Node , union , find , makeset ;

Node = function ( value ) {
	this.back = this ;
	this.next = null ;
	this.value = value ;
} ;

union = function ( a , b ) {

	a.back.next = b ;
	a.back = b.back ;
	return a ;

} ;

find = function ( node ) {

	while ( node.next !== null ) {
		node = node.next ;
	}

	return node ;

} ;

makeset = function ( value ) {

	return new Node( value ) ;

} ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;


})(exports['DisjointSetLinkedList'] = {});
/* js/src/adt/DisjointSetLinkedListWithHead.js */
(function(exports){



var Node , union , find , makeset ;

Node = function ( value ) {
	this.back = this ;
	this.next = null ;
	this.value = value ;
} ;

union = function ( a , b ) {

	var it ;

	a.back.next = b ;
	a.back = b.back ;

	for ( it = a.next ; it !== b ; it = it.next ) {
		it.back = b.back ;
	}

	return a ;

} ;

find = function ( node ) {

	return this.back ;

} ;

makeset = function ( value ) {

	return new Node( value ) ;

} ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['DisjointSetLinkedListWithHead'] = {});
/* js/src/adt/DisjointSetLinkedListWithHeadAndLength.js */
(function(exports){



var Node , union , find , makeset ;

Node = function ( value ) {
	this.length = 1 ;
	this.back = this ;
	this.next = null ;
	this.value = value ;
} ;

union = function ( a , b ) {

	var it ;

	if ( a.length < b.length ) {
		it =  a ;
		a  =  b ;
		b  = it ;
	}

	a.back.next = b ;
	a.back = b.back ;

	for ( it = a.next ; it !== b ; it = it.next ) {
		it.back = b.back ;
	}

	a.length += b.length ;

	return a ;

} ;

find = function ( node ) {

	return this.back ;

} ;

makeset = function ( value ) {

	return new Node( value ) ;

} ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['DisjointSetLinkedListWithHeadAndLength'] = {});
/* js/src/prototype.js */

var prototype = function ( Set , union , find ) {

	Set.prototype.union = function ( other ) {
		return union( this , other ) ;
	} ;

	Set.prototype.find = function ( ) {
		return find( this ) ;
	} ;

} ;

exports.prototype = prototype ;


})(typeof exports === 'undefined' ? this['disjointset'] = {} : exports);
