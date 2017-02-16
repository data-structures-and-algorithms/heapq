'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsCompare = require('@aureooms/js-compare');

var keeporder = function keeporder(compare) {
  return function (a, b) {
    return compare(a[0], b[0]) || (0, _jsCompare.increasing)(a[1], b[1]);
  };
};

exports.default = keeporder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2tlZXBvcmRlci5qcyJdLCJuYW1lcyI6WyJrZWVwb3JkZXIiLCJhIiwiYiIsImNvbXBhcmUiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBLElBQU1BLFlBQVksU0FBWkEsU0FBWTtBQUFBLFNBQVcsVUFBRUMsQ0FBRixFQUFNQyxDQUFOO0FBQUEsV0FBYUMsUUFBU0YsRUFBRSxDQUFGLENBQVQsRUFBZ0JDLEVBQUUsQ0FBRixDQUFoQixLQUEwQiwyQkFBWUQsRUFBRSxDQUFGLENBQVosRUFBbUJDLEVBQUUsQ0FBRixDQUFuQixDQUF2QztBQUFBLEdBQVg7QUFBQSxDQUFsQjs7a0JBRWVGLFMiLCJmaWxlIjoia2VlcG9yZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5jcmVhc2luZyB9IGZyb20gJ0BhdXJlb29tcy9qcy1jb21wYXJlJyA7XG5cbmNvbnN0IGtlZXBvcmRlciA9IGNvbXBhcmUgPT4gKCBhICwgYiApID0+IGNvbXBhcmUoIGFbMF0gLCBiWzBdICkgfHwgaW5jcmVhc2luZyggYVsxXSAsIGJbMV0gKSA7XG5cbmV4cG9ydCBkZWZhdWx0IGtlZXBvcmRlciA7XG4iXX0=