import { selfs , nulls , ones } from '../fundamentals/index.js' ;

export function union ( back , next , length , a , b ) {

	if ( length[a] < length[b] ) {
		let c = a ;
		a = b ;
		b = c ;
	}

	next[back[a]] = b ;
	back[a] = back[b] ;

	for ( let c = next[a] ; c !== b ; c = next[c] ) back[c] = back[b] ;

	length[a] += length[b] ;

	return a ;

}

export const find = ( back , node ) => back[node] ;

export function Universe ( n , List = Array ) {
	this.back = selfs( n , List ) ;
	this.next = nulls( n , List ) ;
	this._length = ones( n , List ) ;
}

Universe.prototype.union = function ( a , b ) {
	return union( this.back , this.next , this._length , a , b ) ;
} ;

Universe.prototype.find = function ( node ) {
	return find( this.back , node ) ;
} ;

export default {
	Universe ,
	union ,
	find ,
} ;
