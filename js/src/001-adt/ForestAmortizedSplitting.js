
const union = rankedtreeunion ;

const find = function ( p , node ) {

	let parent = p[node] ;

	for ( ; p[parent] !== parent ; parent = p[node] ) {

		p[node] = p[parent] ;
		node = parent ;

	}

	return parent ;

} ;

exports.union = union ;
exports.find = find ;
exports.Universe = _RankedTreeUniverse( union , find ) ;
