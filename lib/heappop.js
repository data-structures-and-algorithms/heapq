'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = heappop;

var _jsError = require('@aureooms/js-error');

var _core = require('./core');

function heappop(heap) {

	var x = heap.data;
	var n = x.length;

	if (n === 0) throw new _jsError.IndexError("heappop");

	var last = n - 1;

	// swap last leaf and root

	var tmp = x[0];
	x[0] = x[last];
	x[last] = tmp;

	// sift down the new root

	(0, _core.siftdown)(heap.compare, x, 0, last, 0);

	// return old root

	return x.pop();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9oZWFwcG9wLmpzIl0sIm5hbWVzIjpbImhlYXBwb3AiLCJoZWFwIiwieCIsImRhdGEiLCJuIiwibGVuZ3RoIiwibGFzdCIsInRtcCIsImNvbXBhcmUiLCJwb3AiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsTzs7QUFIeEI7O0FBQ0E7O0FBRWUsU0FBU0EsT0FBVCxDQUFtQkMsSUFBbkIsRUFBMEI7O0FBRXhDLEtBQU1DLElBQUlELEtBQUtFLElBQWY7QUFDQSxLQUFNQyxJQUFJRixFQUFFRyxNQUFaOztBQUVBLEtBQUtELE1BQU0sQ0FBWCxFQUFlLE1BQU0sd0JBQWdCLFNBQWhCLENBQU47O0FBRWYsS0FBTUUsT0FBT0YsSUFBSSxDQUFqQjs7QUFFQTs7QUFFQSxLQUFNRyxNQUFNTCxFQUFFLENBQUYsQ0FBWjtBQUNBQSxHQUFFLENBQUYsSUFBT0EsRUFBRUksSUFBRixDQUFQO0FBQ0FKLEdBQUVJLElBQUYsSUFBVUMsR0FBVjs7QUFFQTs7QUFFQSxxQkFBVU4sS0FBS08sT0FBZixFQUF5Qk4sQ0FBekIsRUFBNkIsQ0FBN0IsRUFBaUNJLElBQWpDLEVBQXdDLENBQXhDOztBQUVBOztBQUVBLFFBQU9KLEVBQUVPLEdBQUYsRUFBUDtBQUVBIiwiZmlsZSI6ImhlYXBwb3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmRleEVycm9yIH0gZnJvbSAnQGF1cmVvb21zL2pzLWVycm9yJyA7XG5pbXBvcnQgeyBzaWZ0ZG93biB9IGZyb20gJy4vY29yZScgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFwcG9wICggaGVhcCApIHtcblxuXHRjb25zdCB4ID0gaGVhcC5kYXRhIDtcblx0Y29uc3QgbiA9IHgubGVuZ3RoIDtcblxuXHRpZiAoIG4gPT09IDAgKSB0aHJvdyBuZXcgSW5kZXhFcnJvciggXCJoZWFwcG9wXCIgKSA7XG5cblx0Y29uc3QgbGFzdCA9IG4gLSAxIDtcblxuXHQvLyBzd2FwIGxhc3QgbGVhZiBhbmQgcm9vdFxuXG5cdGNvbnN0IHRtcCA9IHhbMF0gO1xuXHR4WzBdID0geFtsYXN0XSA7XG5cdHhbbGFzdF0gPSB0bXAgO1xuXG5cdC8vIHNpZnQgZG93biB0aGUgbmV3IHJvb3RcblxuXHRzaWZ0ZG93biggaGVhcC5jb21wYXJlICwgeCAsIDAgLCBsYXN0ICwgMCApIDtcblxuXHQvLyByZXR1cm4gb2xkIHJvb3RcblxuXHRyZXR1cm4geC5wb3AoICkgO1xuXG59XG4iXX0=