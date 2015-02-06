
var t = function ( Node , makeset , union , find ) {

	var a , b , c , d , e , l , o ;

	l = function ( x , y ) {
		ok( find( x ) === find( y ) ) ;
	} ;

	o = function ( x , y ) {
		ok( find( x ) !== find( y ) ) ;
	} ;

	a = makeset( 0 ) ;
	b = makeset( 1 ) ;
	c = makeset( 2 ) ;
	d = makeset( 3 ) ;
	e = makeset( 4 ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

} ;

[
	[ "LinkedList" , disjointset.LinkedList ] ,
	[ "LinkedListWithHead" , disjointset.LinkedListWithHead ] ,
	[ "LinkedListWithHeadAndLength" , disjointset.LinkedListWithHeadAndLength ] ,
	[ "Forest" , disjointset.Forest ] ,
	[ "ForestAmortizedRecursive" , disjointset.ForestAmortizedRecursive ] ,
	[ "ForestAmortizedTwoPasses" , disjointset.ForestAmortizedTwoPasses ] ,
	[ "ForestAmortizedSplitting" , disjointset.ForestAmortizedSplitting ] ,
	[ "ForestAmortizedHalving" , disjointset.ForestAmortizedHalving ] ,
]
.forEach( Function.prototype.apply.bind(

	function ( name , Set ) {

		console.log( name ) ;
		test( name , t.bind( null , Set.Node , Set.makeset , Set.union , Set.find ) ) ;

	} , null

)

) ;
