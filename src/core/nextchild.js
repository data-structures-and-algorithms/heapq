import assert from 'assert';

/**
 * Computes which child is the smallest according
 * to a comparison function.
 *
 * Hypothesis : i < j i.e. there should be at least one child
 *
 * @param {function} compare the comparison function
 * @param {array} a the array where the heap is stored
 * @param {number} i is the first child
 * @param {number} j - 1 is the last leaf
 *
 * @return {number}
 */
export default function nextchild(compare, a, i, j) {
	assert(i < j);
	if (j - i === 1) return i;

	assert(j - i >= 2);
	return compare(a[i], a[i + 1]) <= 0 ? i : i + 1;
}
