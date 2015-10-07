
const union = function ( back , next , a , b ) {

	next[back[a]] = b ;
	back[a] = back[b] ;
	return a ;

} ;

const find = function ( next , node ) {

	while ( next[node] !== -1 ) node = next[node] ;

	return node ;

} ;

const Universe = function ( n ) {
	this.back = selfs( n ) ;
	this.next = nulls( n ) ;
} ;

Universe.prototype.union = function ( a , b ) {
	return union( this.back , this.next , a , b ) ;
} ;

Universe.prototype.find = function ( node ) {
	return find( this.next , node ) ;
} ;

exports.union = union ;
exports.find = find ;
exports.Universe = Universe ;

