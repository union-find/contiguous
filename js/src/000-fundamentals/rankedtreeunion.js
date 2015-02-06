
var rankedtreeunion = function ( a , b ) {

	if ( a.rank < b.rank ) {
		a.parent = b ;
		return b ;
	}

	else if ( a.rank > b.rank ) {
		b.parent = a ;
		return a ;
	}

	else {
		b.parent = a ;
		++a.rank ;
		return a ;
	}

} ;

exports.rankedtreeunion = rankedtreeunion ;
