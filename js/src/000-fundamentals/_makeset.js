
var _makeset = function ( Node ) {

	return function ( value ) {

		return new Node( value ) ;

	} ;

} ;

exports._makeset = _makeset ;
