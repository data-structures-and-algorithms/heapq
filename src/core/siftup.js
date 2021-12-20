/**
 * Sifts up a node.
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {number} i is the root element
 * @param {number} j - 1 is the last leaf
 * @param {number} k is the target node
 */

export default function siftup(compare, a, i, j, k) {
	let current = k - i;

	// While we are not the root

	while (current !== 0) {
		// Address of the parent in a zero-based
		// d-ary heap

		// eslint-disable-next-line no-bitwise
		const parent = i + ((current - 1) >>> 1);

		// If current value is greater than its parent
		// then we are done

		if (compare(a[i + current], a[parent]) >= 0) return i + current;

		// Otherwise
		// swap with parent

		const tmp = a[i + current];
		a[i + current] = a[parent];
		a[parent] = tmp;

		current = parent - i;
	}

	return i + current;
}
