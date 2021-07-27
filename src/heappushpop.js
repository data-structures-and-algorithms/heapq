import { siftdown } from './core/index.js' ;

export default function heappushpop ( heap , item ) {

	const x = heap.data ;
	const n = x.length ;

	if ( n === 0 ) return item ;

	const compare = heap.compare ;

	if ( compare( item , x[0] ) <= 0 ) return item ;

	const smallest = x[0] ;

	x[0] = item ;

	// sift down the new root

	siftdown( compare , x , 0 , n , 0 ) ;

	return smallest ;

}
