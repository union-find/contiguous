const makesets = function ( n ) {

	const p = new Array( n ) ;

	for ( let i = 0 ; i < n ; ++i ) p[i] = i ;

	return p ;

} ;

exports.makesets = makesets ;
