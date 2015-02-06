
var rankedtreeunion = function ( a , b ) {

	var roota , rootb ;

	roota = find( a ) ;
	rootb = find( b ) ;

	if ( roota.rank < rootb.rank ) {
		roota.parent = rootb ;
		return rootb ;
	}

	else if ( roota.rank > rootb.rank ) {
		rootb.parent = roota ;
		return roota ;
	}

	else {
		rootb.parent = roota ;
		++roota.rank ;
		return roota ;
	}

} ;

exports.rankedtreeunion = rankedtreeunion ;
