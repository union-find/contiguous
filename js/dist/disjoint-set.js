(function(exports, undefined){

	'use strict';


/* js/src/000-fundamentals */
/* js/src/000-fundamentals/LinkedListNode.js */

var LinkedListNode = function ( value ) {
	this.back = this ;
	this.next = null ;
	this.value = value ;
} ;

exports.LinkedListNode = LinkedListNode ;


/* js/src/000-fundamentals/RankedTreeNode.js */

var RankedTreeNode = function ( value ) {
	this.rank = 0 ;
	this.parent = this ;
	this.value = value ;
} ;

exports.RankedTreeNode = RankedTreeNode ;


/* js/src/000-fundamentals/_makeset.js */

var _makeset = function ( Node ) {

	return function ( value ) {

		return new Node( value ) ;

	} ;

} ;

exports._makeset = _makeset ;

/* js/src/000-fundamentals/linkedlistbackfind.js */

var linkedlistbackfind = function ( node ) {

	return node.back ;

} ;

exports.linkedlistbackfind = linkedlistbackfind ;


/* js/src/000-fundamentals/linkedlistmakeset.js */

var linkedlistmakeset = _makeset( LinkedListNode ) ;

exports.linkedlistmakeset = linkedlistmakeset ;


/* js/src/000-fundamentals/rankedtreemakeset.js */

var rankedtreemakeset = _makeset( RankedTreeNode ) ;

exports.rankedtreemakeset = rankedtreemakeset ;

/* js/src/000-fundamentals/rankedtreeunion.js */

var rankedtreeunion = function ( a , b ) {

	if ( a.rank < b.rank ) {
		a.parent = b ;
		return b ;
	}

	else if ( a.rank > b.rank ) {
		b.parent = a ;
		return a ;
	}

	else {
		b.parent = a ;
		++a.rank ;
		return a ;
	}

} ;

exports.rankedtreeunion = rankedtreeunion ;

/* js/src/001-adt */
/* js/src/001-adt/Forest.js */
(function(exports){



var Node , union , find , makeset ;

Node = function ( value ) {
	this.parent = this ;
	this.value = value ;
} ;

union = function ( a , b ) {

	find( b ).parent = find( a ) ;

	return a ;

} ;

find = function ( node ) {

	while ( node !== node.parent ) {
		node = node.parent ;
	}

	return node ;

} ;

makeset = _makeset( Node ) ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['Forest'] = {});
/* js/src/001-adt/ForestAmortizedHalving.js */
(function(exports){



var Node , union , find , makeset ;

Node = RankedTreeNode ;

union = rankedtreeunion ;

find = function ( node ) {

	var parent ;

	for ( parent = node.parent ; parent.parent !== parent ; parent = node.parent ) {

		node.parent = parent.parent ;
		node = node.parent ;

	}

	return parent ;


} ;

makeset = rankedtreemakeset ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['ForestAmortizedHalving'] = {});
/* js/src/001-adt/ForestAmortizedRecursive.js */
(function(exports){



var Node , union , find , makeset ;

Node = RankedTreeNode ;

union = rankedtreeunion ;

find = function ( node ) {

	if ( node !== node.parent ) {
		node.parent = find( node.parent ) ;
	}

	return node.parent ;

} ;

makeset = rankedtreemakeset ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['ForestAmortizedRecursive'] = {});
/* js/src/001-adt/ForestAmortizedSplitting.js */
(function(exports){



var Node , union , find , makeset ;

Node = RankedTreeNode ;

union = rankedtreeunion ;

find = function ( node ) {

	var parent ;

	for ( parent = node.parent ; parent.parent !== parent ; parent = node.parent ) {

		node.parent = parent.parent ;
		node = parent ;

	}

	return parent ;

} ;

makeset = rankedtreemakeset ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['ForestAmortizedSplitting'] = {});
/* js/src/001-adt/ForestAmortizedTwoPasses.js */
(function(exports){



var Node , union , find , makeset ;

Node = RankedTreeNode ;

union = rankedtreeunion ;

find = function ( node ) {

	var it , parent ;

	for ( it = node ; it !== it.parent ; it = it.parent ) ;

	for ( ; node.parent !== it ; node = parent ) {

		parent = node.parent ;
		node.parent = it ;

	}

	return it ;

} ;

makeset = rankedtreemakeset ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['ForestAmortizedTwoPasses'] = {});
/* js/src/001-adt/LinkedList.js */
(function(exports){



var Node , union , find , makeset ;

Node = LinkedListNode ;

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

makeset = linkedlistmakeset ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;


})(exports['LinkedList'] = {});
/* js/src/001-adt/LinkedListWithHead.js */
(function(exports){



var Node , union , find , makeset ;

Node = LinkedListNode ;

union = function ( a , b ) {

	var it ;

	a.back.next = b ;
	a.back = b.back ;

	for ( it = a.next ; it !== b ; it = it.next ) {
		it.back = b.back ;
	}

	return a ;

} ;

find = linkedlistbackfind ;

makeset = linkedlistmakeset ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['LinkedListWithHead'] = {});
/* js/src/001-adt/LinkedListWithHeadAndLength.js */
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

find = linkedlistbackfind ;

makeset = _makeset( Node ) ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['LinkedListWithHeadAndLength'] = {});
/* js/src/999-tools */
/* js/src/999-tools/_prototype.js */

var _prototype = function ( Set , union , find ) {

	Set.prototype.union = function ( other ) {
		return union( this , other ) ;
	} ;

	Set.prototype.find = function ( ) {
		return find( this ) ;
	} ;

} ;

exports._prototype = _prototype ;


})(typeof exports === 'undefined' ? this['disjointset'] = {} : exports);
