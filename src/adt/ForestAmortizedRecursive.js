import { rankedtreeunion , _RankedTreeUniverse } from '../fundamentals/index.js' ;

export const union = rankedtreeunion ;

export function find ( p , node ) {

	if ( node !== p[node] ) p[node] = find( p , p[node] ) ;

	return p[node] ;

}

export const Universe = _RankedTreeUniverse( union , find ) ;

export default {
	Universe ,
	union ,
	find ,
} ;
