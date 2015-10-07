
const union = rankedtreeunion ;

const find = function ( p , node ) {

	let it = node ;

	for ( ; it !== p[it] ; it = p[it] ) ;

	while ( p[node] !== it ) {

		const parent = p[node] ;
		p[node] = it ;
		node = parent ;

	}

	return it ;

} ;

exports.union = union ;
exports.find = find ;
exports.Universe = _RankedTreeUniverse( union , find ) ;
