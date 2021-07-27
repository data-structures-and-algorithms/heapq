import {IndexError} from '@failure-abstraction/error';
import {siftdown} from './core/index.js';

export default function heappop(heap) {
	const x = heap.data;
	const n = x.length;

	if (n === 0) throw new IndexError('heappop');

	const last = n - 1;

	// Swap last leaf and root

	const tmp = x[0];
	x[0] = x[last];
	x[last] = tmp;

	// Sift down the new root

	siftdown(heap.compare, x, 0, last, 0);

	// Return old root

	return x.pop();
}
