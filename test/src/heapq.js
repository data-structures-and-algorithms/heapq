import test from 'ava' ;

import { increasing } from '@total-order/primitive' ;
import { list } from "@iterable-iterator/list" ;
import { IndexError } from '@failure-abstraction/error' ;

import heapq from '../../src/index.js' ;

test( "heapq" , t => {

	t.deepEqual(
		list( heapq.merge( increasing ) ) ,
		[ ] ,
		"merge 0"
	) ;

	t.deepEqual(
		list( heapq.merge( increasing , [ ] , [ ] ) ) ,
		[ ] ,
		"merge 2 [ ]"
	) ;

	t.deepEqual(
		list( heapq.merge( increasing , [ ] , [ 1 , 3 , 9 ] , [ 1 , 2 , 3 , 4 ] , [ 1 , 1 , 5 , 10 , 99 ] ) ) ,
		[ 1 , 1 , 1 , 1 , 2 , 3 , 3 , 4 , 5 , 9 , 10 , 99 ] ,
		"merge"
	) ;

	t.deepEqual(

		heapq.nlargest( increasing , 1 , [ ] ) ,
		[ ] ,
		"nlargest empty 1"

	) ;

	t.deepEqual(

		heapq.nlargest( increasing , 99 , [ ] ) ,
		[ ] ,
		"nlargest empty 99"

	) ;

	t.deepEqual(

		heapq.nsmallest( increasing , 1 , [ ] ) ,
		[ ] ,
		"nsmallest empty 1"

	) ;

	t.deepEqual(

		heapq.nsmallest( increasing , 99 , [ ] ) ,
		[ ] ,
		"nsmallest empty 99"

	) ;


	t.deepEqual(

		heapq.nlargest( increasing , 3 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 9 , 8 , 7 ] ,
		"nlargest"

	) ;

	t.deepEqual(

		heapq.nsmallest( increasing , 3 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 6 , 7 , 8 ] ,
		"nsmallest"

	) ;

	t.deepEqual(

		heapq.nlargest( increasing , 4 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 9 , 8 , 7 , 6 ] ,
		"nlargest (sort)"

	) ;

	t.deepEqual(

		heapq.nsmallest( increasing , 4 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 6 , 7 , 8 , 9 ] ,
		"nsmallest (sort)"

	) ;

	t.deepEqual(

		heapq.nlargest( increasing , 1 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 9 ] ,
		"nlargest (min)"

	) ;

	t.deepEqual(

		heapq.nsmallest( increasing , 1 , [ 9 , 8 , 7 , 6 ] ) ,
		[ 6 ] ,
		"nsmallest (min)"

	) ;

	t.throws( heapq.heappop.bind( null , heapq.heapify( increasing , [ ] ) ) , { instanceOf: IndexError } , "pop raises" ) ;
	t.throws( heapq.heapreplace.bind( null , heapq.heapify( increasing , [ ] ) , 1 ) , { instanceOf: IndexError } , "replace raises" ) ;

	const h = heapq.heapify( increasing , [ ] ) ;

	heapq.heappush( h , "b" ) ;
	heapq.heappush( h , "a" ) ;
	heapq.heappush( h , "d" ) ;
	heapq.heappush( h , "e" ) ;
	heapq.heappush( h , "c" ) ;

	t.deepEqual( heapq.heappop( h ) , "a" , "pop a" ) ;
	t.deepEqual( heapq.heappop( h ) , "b" , "pop b" ) ;
	t.deepEqual( heapq.heappop( h ) , "c" , "pop c" ) ;
	t.deepEqual( heapq.heappop( h ) , "d" , "pop d" ) ;
	t.deepEqual( heapq.heappop( h ) , "e" , "pop e" ) ;

	heapq.heappush( h , "b" ) ;
	heapq.heappush( h , "a" ) ;
	heapq.heappush( h , "d" ) ;
	heapq.heappush( h , "e" ) ;
	heapq.heappush( h , "c" ) ;

	t.deepEqual( heapq.heappushpop( h , "z" ) , "a" , "pushpop aa" ) ;
	t.deepEqual( heapq.heappushpop( h , "a" ) , "a" , "pushpop ba" ) ;
	t.deepEqual( heapq.heappushpop( h , "z" ) , "b" , "pushpop bb" ) ;
	t.deepEqual( heapq.heappushpop( h , "a" ) , "a" , "pushpop ca" ) ;
	t.deepEqual( heapq.heappushpop( h , "z" ) , "c" , "pushpop cc" ) ;

	t.deepEqual( heapq.heappop( h ) , "d" , "pop d" ) ;
	t.deepEqual( heapq.heappop( h ) , "e" , "pop e" ) ;
	t.deepEqual( heapq.heappop( h ) , "z" , "pop z 1" ) ;
	t.deepEqual( heapq.heappop( h ) , "z" , "pop z 2" ) ;
	t.deepEqual( heapq.heappop( h ) , "z" , "pop z 3" ) ;

	t.deepEqual( heapq.heappushpop( h , "z" ) , "z" , "pushpop zz" ) ;

} ) ;
