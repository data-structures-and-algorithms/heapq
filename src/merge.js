import {enumerate} from '@iterable-iterator/zip';
import {map} from '@iterable-iterator/map';
import {iter} from '@iterable-iterator/iter';

import { keeporder } from './core/index.js' ;

import heapify from './heapify.js' ;
import heappop from './heappop.js' ;
import heapreplace from './heapreplace.js' ;

export default function* merge ( compare , ...iterables ) {

	const x = [ ] ;

	for ( let [ order , it ] of enumerate( map( iter , iterables ) ) ) {

		const rv = it.next() ;

		if ( rv.done ) continue ;

		x.push( [ rv.value , order , it ] ) ;

	}

	const h = heapify( keeporder( compare ) , x ) ;

	while ( x.length > 1 ) {

		while ( true ) {

			const s = x[0] ;

			const [ value , order , it ] = s ;

			yield value ;

			const rv = it.next() ;

			if ( rv.done ) {

				heappop( h ) ;
				break ;

			}

			s[0] = rv.value ;

			heapreplace( h , s ) ;

		}

	}

	if ( x.length > 0 ) {

		const [ value , order , it ] = x[0] ;

		yield value ;

		yield *it ;

	}

}
