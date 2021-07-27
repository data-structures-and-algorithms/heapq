import {min} from '@iterable-iterator/reduce';
import {sorted} from '@iterable-iterator/sorted';
import {forwardRangeIterator} from '@iterable-iterator/range';
import {iter} from '@iterable-iterator/iter';
import {_zip2} from '@iterable-iterator/zip';
import { reversed } from '@total-order/reversed' ;

import { keeporder } from './core/index.js' ;

import heapify from './heapify.js' ;
import heapreplace from './heapreplace.js' ;

export default function nsmallest ( compare , n , iterable ) {

	if ( n === 1 ) {

		const sentinel = { } ;

		const result = min( compare , iterable , sentinel ) ;

		return result === sentinel ? [ ] : [ result ] ;

	}

	if ( iterable.length !== undefined ) {

		if ( n >= iterable.length ) return sorted( compare , iterable ) ;

	}

	const it = iter( iterable ) ;

	const result = Array.from( _zip2( forwardRangeIterator( 0 , n , 1 ) , it ) , ( [ i , elem ] ) => [ elem , i ] ) ;

	if ( result.length === 0 ) return result ;

	const h = heapify( keeporder( reversed( compare ) ) , result ) ;

	let top = result[0][0] ;

	let order = n ;

	for ( const elem of it ) {

		if ( compare( elem , top ) < 0 ) {

			heapreplace( h , [ elem , order ] ) ;

			top = result[0][0] ;

			++order ;

		}

	}

	return sorted( compare , Array.from( result , r => r[0] ) ) ;

}
