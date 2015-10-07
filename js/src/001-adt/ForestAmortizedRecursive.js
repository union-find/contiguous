
const union = rankedtreeunion ;

const find = function ( p , node ) {

	if ( node !== p[node] ) p[node] = find( p , p[node] ) ;

	return p[node] ;

} ;

exports.union = union ;
exports.find = find ;
exports.Universe = _RankedTreeUniverse( union , find ) ;
