import { reversed } from '@total-order/reversed' ;

import nsmallest from './nsmallest' ;

export default function nlargest ( compare , n , iterable ) {

	return nsmallest( reversed( compare ) , n , iterable ) ;

}
