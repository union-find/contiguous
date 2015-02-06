
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
