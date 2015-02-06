
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

