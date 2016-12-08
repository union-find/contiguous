import test from 'ava' ;

import {
	LinkedList ,
	LinkedListWithHead ,
	LinkedListWithHeadAndLength ,
	Forest ,
	ForestAmortizedRecursive ,
	ForestAmortizedTwoPasses ,
	ForestAmortizedSplitting ,
	ForestAmortizedHalving ,
} from '../../src' ;

function macro ( t , Universe ) {

	let a , b , c , d , e , A , B , C , D , E , U ;

	const l = ( x , y ) => t.true( U.find( x ) === U.find( y ) ) ;

	const o = ( x , y ) => t.true( U.find( x ) !== U.find( y ) ) ;

	// 1st scenario
	U = new Universe( 5 ) ;

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

	A = U.union( A , E ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = U.union( D , B ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = U.union( C , A ) ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = U.union( B , A ) ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

	// 2nd scenario
	U = new Universe( 5 ) ;

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

	A = U.union( A , E ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; o( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; o( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	B = U.union( D , B ) ;

	l( a , a ) ; o( b , a ) ; o( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	o( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; o( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; o( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = U.union( A , C ) ;

	l( a , a ) ; o( b , a ) ; l( c , a ) ; o( d , a ) ; l( e , a ) ;
	o( a , b ) ; l( b , b ) ; o( c , b ) ; l( d , b ) ; o( e , b ) ;
	l( a , c ) ; o( b , c ) ; l( c , c ) ; o( d , c ) ; l( e , c ) ;
	o( a , d ) ; l( b , d ) ; o( c , d ) ; l( d , d ) ; o( e , d ) ;
	l( a , e ) ; o( b , e ) ; l( c , e ) ; o( d , e ) ; l( e , e ) ;

	A = U.union( B , A ) ;

	l( a , a ) ; l( b , a ) ; l( c , a ) ; l( d , a ) ; l( e , a ) ;
	l( a , b ) ; l( b , b ) ; l( c , b ) ; l( d , b ) ; l( e , b ) ;
	l( a , c ) ; l( b , c ) ; l( c , c ) ; l( d , c ) ; l( e , c ) ;
	l( a , d ) ; l( b , d ) ; l( c , d ) ; l( d , d ) ; l( e , d ) ;
	l( a , e ) ; l( b , e ) ; l( c , e ) ; l( d , e ) ; l( e , e ) ;

} ;

for ( const [ name , Set ] of [
	[ "LinkedList" , LinkedList ] ,
	[ "LinkedListWithHead" , LinkedListWithHead ] ,
	[ "LinkedListWithHeadAndLength" , LinkedListWithHeadAndLength ] ,
	[ "Forest" , Forest ] ,
	[ "ForestAmortizedRecursive" , ForestAmortizedRecursive ] ,
	[ "ForestAmortizedTwoPasses" , ForestAmortizedTwoPasses ] ,
	[ "ForestAmortizedSplitting" , ForestAmortizedSplitting ] ,
	[ "ForestAmortizedHalving" , ForestAmortizedHalving ] ,
] ) {

	test( name , macro , Set.Universe ) ;

}
