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

})(exports['DisjointSetForest'] = {});
/* js/src/adt/DisjointSetForestAmortizedHalving.js */
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

})(exports['DisjointSetForestAmortizedHalving'] = {});
/* js/src/adt/DisjointSetForestAmortizedRecursive.js */
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

})(exports['DisjointSetForestAmortizedRecursive'] = {});
/* js/src/adt/DisjointSetForestAmortizedSplitting.js */
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

})(exports['DisjointSetForestAmortizedSplitting'] = {});
/* js/src/adt/DisjointSetForestAmortizedTwoPasses.js */
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

})(exports['DisjointSetForestAmortizedTwoPasses'] = {});
/* js/src/adt/DisjointSetLinkedList.js */
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


})(exports['DisjointSetLinkedList'] = {});
/* js/src/adt/DisjointSetLinkedListWithHead.js */
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

find = linkedlistbackfind ;

makeset = _makeset( Node ) ;

exports.Node = Node ;
exports.union = union ;
exports.find = find ;
exports.makeset = makeset ;

})(exports['DisjointSetLinkedListWithHeadAndLength'] = {});
/* js/src/fundamentals */
/* js/src/fundamentals/LinkedListNode.js */

var LinkedListNode = function ( value ) {
	this.back = this ;
	this.next = null ;
	this.value = value ;
} ;

exports.LinkedListNode = LinkedListNode ;


/* js/src/fundamentals/RankedTreeNode.js */

var RankedTreeNode = function ( value ) {
	this.rank = 0 ;
	this.parent = this ;
	this.value = value ;
} ;

exports.RankedTreeNode = RankedTreeNode ;


/* js/src/fundamentals/_makeset.js */

var _makeset = function ( Node ) {

	return function ( value ) {

		return new Node( value ) ;

	} ;

} ;

exports._makeset = _makeset ;

/* js/src/fundamentals/linkedlistbackfind.js */

var linkedlistbackfind = function ( node ) {

	return node.back ;

} ;

exports.linkedlistbackfind = linkedlistbackfind ;


/* js/src/fundamentals/linkedlistmakeset.js */

var linkedlistmakeset = _makeset( LinkedListNode ) ;

exports.linkedlistmakeset = linkedlistmakeset ;


/* js/src/fundamentals/rankedtreemakeset.js */

var rankedtreemakeset = _makeset( RankedTreeNode ) ;

exports.rankedtreemakeset = rankedtreemakeset ;

/* js/src/fundamentals/rankedtreeunion.js */

var rankedtreeunion = function ( a , b ) {

	var roota , rootb ;

	roota = find( a ) ;
	rootb = find( b ) ;

	if ( roota.rank < rootb.rank ) {
		roota.parent = rootb ;
		return rootb ;
	}

	else if ( roota.rank > rootb.rank ) {
		rootb.parent = roota ;
		return roota ;
	}

	else {
		rootb.parent = roota ;
		++roota.rank ;
		return roota ;
	}

} ;

exports.rankedtreeunion = rankedtreeunion ;

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
