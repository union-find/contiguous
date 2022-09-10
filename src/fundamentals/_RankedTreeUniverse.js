import selfs from './selfs.js' ;
import zeros from './zeros.js' ;

export default function _RankedTreeUniverse ( union , find ) {

	const Universe = function ( n , List = Array ) {
		this.p = selfs( n , List ) ;
		this.r = zeros( n , List ) ;
	} ;

	Universe.prototype.union = function ( a , b ) {
		return union( this.p , this.r , a , b ) ;
	} ;

	Universe.prototype.find = function ( x ) {
		return find( this.p , x ) ;
	} ;

	return Universe ;

}
