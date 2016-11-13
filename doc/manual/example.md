See Python's docs:

  - [heapq](https://docs.python.org/3.6/library/heapq.html)

## Changes w.r.t. Python's API

```js
let array = [ 2 , 1 , 3 ] ;
let heap = heapq.heapify( compare.increasing , array ) ;
array[0] ; // 1
heapq.heappop( heap ) ; // 1
heapq.heappop( heap ) ; // 2
heapq.heappop( heap ) ; // 3
array.length ; // 0
```
