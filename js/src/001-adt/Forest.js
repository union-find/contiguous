
const union = function ( p , a , b ) {

	p[ find( p , b ) ] = find( p , a ) ;

	return a ;

} ;

const find = function ( p , x ) {

	while ( x !== p[x] ) x = p[x] ;

	return x ;

} ;

const Forest = function ( n ) {
	this.p = makesets( n ) ;
} ;

Forest.prototype.union = function ( a , b ) {
	return union( this.p , a , b ) ;
} ;

Forest.prototype.find = function ( x ) {
	return find( this.p , x ) ;
} ;

exports.union = union ;
exports.find = find ;
exports.Forest = Forest ;
