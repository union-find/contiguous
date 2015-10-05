
var t = function ( Forest ) {

	var a , b , c , d , e , A , B , C , D , E , l , o , F ;

	l = function ( x , y ) {
		ok( F.find( x ) === F.find( y ) ) ;
	} ;

	o = function ( x , y ) {
		ok( F.find( x ) !== F.find( y ) ) ;
	} ;

	// 1st scenario
	F = new Forest( 5 ) ;

	A = a = 0 ;
	B = b = 1 ;
	C = c = 2 ;
	D = d = 3 ;
	E = e = 4 ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = F.union( A , E ) ;
	delete E ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = F.union( D , B ) ;
	delete D ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = F.union( C , A ) ;
	delete C ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = F.union( B , A ) ;
	delete B ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

	// 2nd scenario
	F = new Forest( 5 ) ;

	A = a = 0 ;
	B = b = 1 ;
	C = c = 2 ;
	D = d = 3 ;
	E = e = 4 ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; o( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	o( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = F.union( A , E ) ;
	delete E ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = F.union( D , B ) ;
	delete D ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = F.union( A , C ) ;
	delete C ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = F.union( B , A ) ;
	delete B ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

} ;

[
	[ "Forest" , fixeddisjointset.Forest ] ,
	[ "ForestAmortizedRecursive" , fixeddisjointset.ForestAmortizedRecursive ] ,
	[ "ForestAmortizedTwoPasses" , fixeddisjointset.ForestAmortizedTwoPasses ] ,
	[ "ForestAmortizedSplitting" , fixeddisjointset.ForestAmortizedSplitting ] ,
	[ "ForestAmortizedHalving" , fixeddisjointset.ForestAmortizedHalving ] ,
]
.forEach( Function.prototype.apply.bind(

	function ( name , Forest ) {

		test( name , t.bind( null , Forest.Forest ) ) ;

	} , null

)

) ;
