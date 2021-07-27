# Examples
See Python's docs:

  - [heapq](https://docs.python.org/3.6/library/heapq.html)

## Changes w.r.t. Python's API

```js
import {heapify, heappop} from '@data-structure/heapq';
import {increasing} from '@total-order/primitive';
let array = [2, 1, 3];
let heap = heapify(increasing, array);
array[0] ; // 1
heappop( heap ) ; // 1
heappop( heap ) ; // 2
heappop( heap ) ; // 3
array.length ; // 0
```
