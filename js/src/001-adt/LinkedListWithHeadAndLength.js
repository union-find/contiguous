
const union = function ( back , next , length , a , b ) {

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

} ;

const find = ( back , node ) => back[node] ;

const Universe = function ( n ) {
	this.back = selfs( n ) ;
	this.next = nulls( n ) ;
	this._length = ones( n ) ;
} ;

Universe.prototype.union = function ( a , b ) {
	return union( this.back , this.next , this._length , a , b ) ;
} ;

Universe.prototype.find = function ( node ) {
	return find( this.back , node ) ;
} ;

exports.union = union ;
exports.find = find ;
exports.Universe = Universe ;
