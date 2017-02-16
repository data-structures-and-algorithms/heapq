'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = nsmallest;

var _jsItertools = require('@aureooms/js-itertools');

var _jsCompare = require('@aureooms/js-compare');

var _core = require('./core');

var _heapify = require('./heapify');

var _heapify2 = _interopRequireDefault(_heapify);

var _heapreplace = require('./heapreplace');

var _heapreplace2 = _interopRequireDefault(_heapreplace);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function nsmallest(compare, n, iterable) {

	if (n === 1) {

		var sentinel = {};

		var _result = (0, _jsItertools.min)(compare, iterable, sentinel);

		return _result === sentinel ? [] : [_result];
	}

	if (iterable.length !== undefined) {

		if (n >= iterable.length) return (0, _jsItertools.sorted)(compare, iterable);
	}

	var it = (0, _jsItertools.iter)(iterable);

	var result = Array.from((0, _jsItertools._zip2)((0, _jsItertools._range)(0, n, 1), it), function (_ref) {
		var _ref2 = _slicedToArray(_ref, 2),
		    i = _ref2[0],
		    elem = _ref2[1];

		return [elem, i];
	});

	if (result.length === 0) return result;

	var h = (0, _heapify2.default)((0, _core.keeporder)((0, _jsCompare.reverse)(compare)), result);

	var top = result[0][0];

	var order = n;

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = it[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var elem = _step.value;


			if (compare(elem, top) < 0) {

				(0, _heapreplace2.default)(h, [elem, order]);

				top = result[0][0];

				++order;
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return (0, _jsItertools.sorted)(compare, Array.from(result, function (r) {
		return r[0];
	}));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9uc21hbGxlc3QuanMiXSwibmFtZXMiOlsibnNtYWxsZXN0IiwiY29tcGFyZSIsIm4iLCJpdGVyYWJsZSIsInNlbnRpbmVsIiwicmVzdWx0IiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiaXQiLCJBcnJheSIsImZyb20iLCJpIiwiZWxlbSIsImgiLCJ0b3AiLCJvcmRlciIsInIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O2tCQVF3QkEsUzs7QUFSeEI7O0FBQ0E7O0FBRUE7O0FBRUE7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsU0FBVCxDQUFxQkMsT0FBckIsRUFBK0JDLENBQS9CLEVBQW1DQyxRQUFuQyxFQUE4Qzs7QUFFNUQsS0FBS0QsTUFBTSxDQUFYLEVBQWU7O0FBRWQsTUFBTUUsV0FBVyxFQUFqQjs7QUFFQSxNQUFNQyxVQUFTLHNCQUFLSixPQUFMLEVBQWVFLFFBQWYsRUFBMEJDLFFBQTFCLENBQWY7O0FBRUEsU0FBT0MsWUFBV0QsUUFBWCxHQUFzQixFQUF0QixHQUE0QixDQUFFQyxPQUFGLENBQW5DO0FBRUE7O0FBRUQsS0FBS0YsU0FBU0csTUFBVCxLQUFvQkMsU0FBekIsRUFBcUM7O0FBRXBDLE1BQUtMLEtBQUtDLFNBQVNHLE1BQW5CLEVBQTRCLE9BQU8seUJBQVFMLE9BQVIsRUFBa0JFLFFBQWxCLENBQVA7QUFFNUI7O0FBRUQsS0FBTUssS0FBSyx1QkFBTUwsUUFBTixDQUFYOztBQUVBLEtBQU1FLFNBQVNJLE1BQU1DLElBQU4sQ0FBWSx3QkFBTyx5QkFBUSxDQUFSLEVBQVlSLENBQVosRUFBZ0IsQ0FBaEIsQ0FBUCxFQUE2Qk0sRUFBN0IsQ0FBWixFQUFnRDtBQUFBO0FBQUEsTUFBSUcsQ0FBSjtBQUFBLE1BQVFDLElBQVI7O0FBQUEsU0FBb0IsQ0FBRUEsSUFBRixFQUFTRCxDQUFULENBQXBCO0FBQUEsRUFBaEQsQ0FBZjs7QUFFQSxLQUFLTixPQUFPQyxNQUFQLEtBQWtCLENBQXZCLEVBQTJCLE9BQU9ELE1BQVA7O0FBRTNCLEtBQU1RLElBQUksdUJBQVMscUJBQVcsd0JBQVNaLE9BQVQsQ0FBWCxDQUFULEVBQTJDSSxNQUEzQyxDQUFWOztBQUVBLEtBQUlTLE1BQU1ULE9BQU8sQ0FBUCxFQUFVLENBQVYsQ0FBVjs7QUFFQSxLQUFJVSxRQUFRYixDQUFaOztBQTVCNEQ7QUFBQTtBQUFBOztBQUFBO0FBOEI1RCx1QkFBb0JNLEVBQXBCLDhIQUF5QjtBQUFBLE9BQWJJLElBQWE7OztBQUV4QixPQUFLWCxRQUFTVyxJQUFULEVBQWdCRSxHQUFoQixJQUF3QixDQUE3QixFQUFpQzs7QUFFaEMsK0JBQWFELENBQWIsRUFBaUIsQ0FBRUQsSUFBRixFQUFTRyxLQUFULENBQWpCOztBQUVBRCxVQUFNVCxPQUFPLENBQVAsRUFBVSxDQUFWLENBQU47O0FBRUEsTUFBRVUsS0FBRjtBQUVBO0FBRUQ7QUExQzJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBNEM1RCxRQUFPLHlCQUFRZCxPQUFSLEVBQWtCUSxNQUFNQyxJQUFOLENBQVlMLE1BQVosRUFBcUI7QUFBQSxTQUFLVyxFQUFFLENBQUYsQ0FBTDtBQUFBLEVBQXJCLENBQWxCLENBQVA7QUFFQSIsImZpbGUiOiJuc21hbGxlc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtaW4gLCBzb3J0ZWQgLCBfemlwMiAsIF9yYW5nZSAsIGl0ZXIgfSBmcm9tICdAYXVyZW9vbXMvanMtaXRlcnRvb2xzJyA7XG5pbXBvcnQgeyByZXZlcnNlIH0gZnJvbSAnQGF1cmVvb21zL2pzLWNvbXBhcmUnIDtcblxuaW1wb3J0IHsga2VlcG9yZGVyIH0gZnJvbSAnLi9jb3JlJyA7XG5cbmltcG9ydCBoZWFwaWZ5IGZyb20gJy4vaGVhcGlmeScgO1xuaW1wb3J0IGhlYXByZXBsYWNlIGZyb20gJy4vaGVhcHJlcGxhY2UnIDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbnNtYWxsZXN0ICggY29tcGFyZSAsIG4gLCBpdGVyYWJsZSApIHtcblxuXHRpZiAoIG4gPT09IDEgKSB7XG5cblx0XHRjb25zdCBzZW50aW5lbCA9IHsgfSA7XG5cblx0XHRjb25zdCByZXN1bHQgPSBtaW4oIGNvbXBhcmUgLCBpdGVyYWJsZSAsIHNlbnRpbmVsICkgO1xuXG5cdFx0cmV0dXJuIHJlc3VsdCA9PT0gc2VudGluZWwgPyBbIF0gOiBbIHJlc3VsdCBdIDtcblxuXHR9XG5cblx0aWYgKCBpdGVyYWJsZS5sZW5ndGggIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdGlmICggbiA+PSBpdGVyYWJsZS5sZW5ndGggKSByZXR1cm4gc29ydGVkKCBjb21wYXJlICwgaXRlcmFibGUgKSA7XG5cblx0fVxuXG5cdGNvbnN0IGl0ID0gaXRlciggaXRlcmFibGUgKSA7XG5cblx0Y29uc3QgcmVzdWx0ID0gQXJyYXkuZnJvbSggX3ppcDIoIF9yYW5nZSggMCAsIG4gLCAxICkgLCBpdCApICwgKCBbIGkgLCBlbGVtIF0gKSA9PiBbIGVsZW0gLCBpIF0gKSA7XG5cblx0aWYgKCByZXN1bHQubGVuZ3RoID09PSAwICkgcmV0dXJuIHJlc3VsdCA7XG5cblx0Y29uc3QgaCA9IGhlYXBpZnkoIGtlZXBvcmRlciggcmV2ZXJzZSggY29tcGFyZSApICkgLCByZXN1bHQgKSA7XG5cblx0bGV0IHRvcCA9IHJlc3VsdFswXVswXSA7XG5cblx0bGV0IG9yZGVyID0gbiA7XG5cblx0Zm9yICggY29uc3QgZWxlbSBvZiBpdCApIHtcblxuXHRcdGlmICggY29tcGFyZSggZWxlbSAsIHRvcCApIDwgMCApIHtcblxuXHRcdFx0aGVhcHJlcGxhY2UoIGggLCBbIGVsZW0gLCBvcmRlciBdICkgO1xuXG5cdFx0XHR0b3AgPSByZXN1bHRbMF1bMF0gO1xuXG5cdFx0XHQrK29yZGVyIDtcblxuXHRcdH1cblxuXHR9XG5cblx0cmV0dXJuIHNvcnRlZCggY29tcGFyZSAsIEFycmF5LmZyb20oIHJlc3VsdCAsIHIgPT4gclswXSApICkgO1xuXG59XG4iXX0=