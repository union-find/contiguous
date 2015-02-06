
var t = function ( Node , makeset , union , find ) {

	var a , b , c , d , e , A , B , C , D , E , l , o ;

	l = function ( x , y ) {
		ok( find( x ) === find( y ) ) ;
	} ;

	o = function ( x , y ) {
		ok( find( x ) !== find( y ) ) ;
	} ;

	// 1st scenario

	A = a = makeset( 0 ) ;
	B = b = makeset( 1 ) ;
	C = c = makeset( 2 ) ;
	D = d = makeset( 3 ) ;
	E = e = makeset( 4 ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( A , E ) ;
	delete E ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = union( D , B ) ;
	delete D ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( C , A ) ;
	delete C ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( B , A ) ;
	delete B ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

	// 2nd scenario

	A = a = makeset( 0 ) ;
	B = b = makeset( 1 ) ;
	C = c = makeset( 2 ) ;
	D = d = makeset( 3 ) ;
	E = e = makeset( 4 ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( A , E ) ;
	delete E ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = union( D , B ) ;
	delete D ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( A , C ) ;
	delete C ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = union( B , A ) ;
	delete B ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

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

		var Node , makeset , union , find ;

		Node = function ( value ) { Set.Node.call( this , value ) ; } ;

		disjointset._prototype( Node , Set.union , Set.find ) ;

		makeset = disjointset._makeset( Node ) ;

		union = function ( a , b ) { return a.union( b ) ; } ;

		find = function ( node ) { return node.find( ) ; } ;

		test( name + " (prototype)" , t.bind( null , Node , makeset , union , find ) ) ;

	} , null

)

) ;
