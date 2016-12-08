import { selfs , nulls } from '../fundamentals' ;

export function union ( back , next , a , b ) {

	next[back[a]] = b ;
	back[a] = back[b] ;

	for ( let c = next[a] ; c !== b ; c = next[c] ) back[c] = back[b] ;

	return a ;

}

export const find = ( back , node ) => back[node] ;

export function Universe ( n , Array = Array) {
	this.back = selfs( n , Array ) ;
	this.next = nulls( n , Array ) ;
}

Universe.prototype.union = function ( a , b ) {
	return union( this.back , this.next , a , b ) ;
} ;

Universe.prototype.find = function ( node ) {
	return find( this.back , node ) ;
} ;

export default {
	Universe ,
	union ,
	find ,
} ;
