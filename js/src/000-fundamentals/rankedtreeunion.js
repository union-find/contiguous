
const rankedtreeunion = function ( p , r , a , b ) {

	if ( r[a] < r[b] ) {
		p[a] = b ;
		return b ;
	}

	else if ( r[a] > r[b] ) {
		p[b] = a ;
		return a ;
	}

	else {
		p[b] = a ;
		++r[a] ;
		return a ;
	}

} ;

exports.rankedtreeunion = rankedtreeunion ;
