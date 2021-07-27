import { increasing } from '@total-order/primitive' ;

const keeporder = compare => ( a , b ) => compare( a[0] , b[0] ) || increasing( a[1] , b[1] ) ;

export default keeporder ;
