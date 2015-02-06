
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
