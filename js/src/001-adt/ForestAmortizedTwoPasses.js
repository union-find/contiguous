
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
