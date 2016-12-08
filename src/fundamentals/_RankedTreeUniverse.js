import selfs from './selfs' ;
import zeros from './zeros' ;

export default function _RankedTreeUniverse ( union , find ) {

	const Universe = function ( n , Array = Array ) {
		this.p = selfs( n , Array ) ;
		this.r = zeros( n , Array ) ;
	} ;

	Universe.prototype.union = function ( a , b ) {
		return union( this.p , this.r , a , b ) ;
	} ;

	Universe.prototype.find = function ( x ) {
		return find( this.p , x ) ;
	} ;

	return Universe ;

}
