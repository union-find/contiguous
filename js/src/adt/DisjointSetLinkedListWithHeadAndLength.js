
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
