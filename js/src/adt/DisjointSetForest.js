
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
