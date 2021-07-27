import {siftup} from './core/index.js';

export default function heappush(heap, item) {
	const x = heap.data;
	const n = x.length;

	x.push(item);

	// Sift up the new leaf

	siftup(heap.compare, x, 0, n + 1, n);
}
