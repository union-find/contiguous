import { selfs } from '../fundamentals' ;

export function union ( p , a , b ) {

	p[ find( p , b ) ] = find( p , a ) ;

	return a ;

}

export function find ( p , x ) {

	while ( x !== p[x] ) x = p[x] ;

	return x ;

}

export function Universe ( n , List = Array ) {
	this.p = selfs( n , List ) ;
}

Universe.prototype.union = function ( a , b ) {
	return union( this.p , a , b ) ;
} ;

Universe.prototype.find = function ( x ) {
	return find( this.p , x ) ;
} ;

export default {
	Universe ,
	union ,
	find ,
} ;
