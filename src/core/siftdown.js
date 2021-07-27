import nextchild from './nextchild.js';

/**
 * Sifts down a node.
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {number} i is the root element
 * @param {number} j - 1 is the last leaf
 * @param {number} k is the target node
 */

export default function siftdown(compare, a, i, j, k) {
	let current = k - i;

	while (true) {
		// Address of the first child in a zero-based
		// binary heap

		const firstchild = 2 * current + 1;

		// If current node has no children
		// then we are done

		if (firstchild >= j - i) break;

		// If current value is smaller than its smallest
		// child then we are done

		const candidate = nextchild(compare, a, i + firstchild, j);

		if (compare(a[i + current], a[candidate]) <= 0) break;

		// Otherwise
		// swap with smallest child

		const tmp = a[i + current];
		a[i + current] = a[candidate];
		a[candidate] = tmp;

		current = candidate - i;
	}

	return i + current;
}
