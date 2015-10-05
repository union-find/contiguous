
const _RankedTreeForest = function ( union , find ) {

	const Forest = function ( n ) {
		this.p = makesets( n ) ;
		this.r = makeranks( n ) ;
	} ;

	Forest.prototype.union = function ( a , b ) {
		return union( this.p , this.r , a , b ) ;
	} ;

	Forest.prototype.find = function ( x ) {
		return find( this.p , x ) ;
	} ;

	return Forest ;

} ;

exports._RankedTreeForest = _RankedTreeForest ;
