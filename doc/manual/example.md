# Examples
```js
// can choose between 8 different implementations
//   - ForestAmortizedHalving
//   - ForestAmortizedRecursive
//   - ForestAmortizedSplitting
//   - ForestAmortizedTwoPasses
//   - Forest
//   - LinkedList
//   - LinkedListWithHeadAndLength
//   - LinkedListWithHead

let { Universe } = fixeddisjointset.ForestAmortizedHalving ;

let U = new Universe( 3 ) ;

let a , b , c , A , B , C ;

A = a = 0 ;
B = b = 1 ;
C = c = 2 ;

U.find( a ) === U.find( a ) ; // true
U.find( a ) === U.find( b ) ; // false
U.find( a ) === U.find( c ) ; // false

U.find( b ) === U.find( a ) ; // false
U.find( b ) === U.find( b ) ; // true
U.find( b ) === U.find( c ) ; // false

U.find( c ) === U.find( a ) ; // false
U.find( c ) === U.find( b ) ; // false
U.find( c ) === U.find( c ) ; // true

A = U.union( A , B ) ; // U.union( B , A ) would work too
delete B ;

U.find( a ) === U.find( a ) ; // true
U.find( a ) === U.find( b ) ; // true
U.find( a ) === U.find( c ) ; // false

U.find( b ) === U.find( a ) ; // true
U.find( b ) === U.find( b ) ; // true
U.find( b ) === U.find( c ) ; // false

U.find( c ) === U.find( a ) ; // false
U.find( c ) === U.find( b ) ; // false
U.find( c ) === U.find( c ) ; // true
```
