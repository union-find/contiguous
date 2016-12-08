export default function ones ( n , List = Array ) {

	const a = new List( n ) ;

	for ( let i = 0 ; i < n ; ++i ) a[i] = 1 ;

	return a ;

}
