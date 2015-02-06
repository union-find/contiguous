
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
