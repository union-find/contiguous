
const _RankedTreeUniverse = function ( union , find ) {

	const Universe = function ( n ) {
		this.p = selfs( n ) ;
		this.r = zeros( n ) ;
	} ;

	Universe.prototype.union = function ( a , b ) {
		return union( this.p , this.r , a , b ) ;
	} ;

	Universe.prototype.find = function ( x ) {
		return find( this.p , x ) ;
	} ;

	return Universe ;

} ;

exports._RankedTreeUniverse = _RankedTreeUniverse ;
