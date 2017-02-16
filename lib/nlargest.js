'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = nlargest;

var _jsCompare = require('@aureooms/js-compare');

var _nsmallest = require('./nsmallest');

var _nsmallest2 = _interopRequireDefault(_nsmallest);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nlargest(compare, n, iterable) {

	return (0, _nsmallest2.default)((0, _jsCompare.reverse)(compare), n, iterable);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ubGFyZ2VzdC5qcyJdLCJuYW1lcyI6WyJubGFyZ2VzdCIsImNvbXBhcmUiLCJuIiwiaXRlcmFibGUiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUl3QkEsUTs7QUFKeEI7O0FBRUE7Ozs7OztBQUVlLFNBQVNBLFFBQVQsQ0FBb0JDLE9BQXBCLEVBQThCQyxDQUE5QixFQUFrQ0MsUUFBbEMsRUFBNkM7O0FBRTNELFFBQU8seUJBQVcsd0JBQVNGLE9BQVQsQ0FBWCxFQUFnQ0MsQ0FBaEMsRUFBb0NDLFFBQXBDLENBQVA7QUFFQSIsImZpbGUiOiJubGFyZ2VzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJldmVyc2UgfSBmcm9tICdAYXVyZW9vbXMvanMtY29tcGFyZScgO1xuXG5pbXBvcnQgbnNtYWxsZXN0IGZyb20gJy4vbnNtYWxsZXN0JyA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5sYXJnZXN0ICggY29tcGFyZSAsIG4gLCBpdGVyYWJsZSApIHtcblxuXHRyZXR1cm4gbnNtYWxsZXN0KCByZXZlcnNlKCBjb21wYXJlICkgLCBuICwgaXRlcmFibGUgKSA7XG5cbn1cbiJdfQ==