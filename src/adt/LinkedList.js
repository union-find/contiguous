import { selfs , nulls } from '../fundamentals' ;

export function union ( back , next , a , b ) {

	next[back[a]] = b ;
	back[a] = back[b] ;
	return a ;

}

export function find ( next , node ) {

	while ( next[node] !== -1 ) node = next[node] ;

	return node ;

}

export function Universe ( n , List = Array ) {
	this.back = selfs( n , List ) ;
	this.next = nulls( n , List ) ;
}

Universe.prototype.union = function ( a , b ) {
	return union( this.back , this.next , a , b ) ;
} ;

Universe.prototype.find = function ( node ) {
	return find( this.next , node ) ;
} ;

export default {
	Universe ,
	union ,
	find ,
} ;
