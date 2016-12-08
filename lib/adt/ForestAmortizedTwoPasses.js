'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Universe = exports.union = undefined;
exports.find = find;

var _fundamentals = require('../fundamentals');

var union = exports.union = _fundamentals.rankedtreeunion;

function find(p, node) {

	var it = node;

	for (; it !== p[it]; it = p[it]) {}

	while (p[node] !== it) {

		var parent = p[node];
		p[node] = it;
		node = parent;
	}

	return it;
}

var Universe = exports.Universe = (0, _fundamentals._RankedTreeUniverse)(union, find);

exports.default = {
	Universe: Universe,
	union: union,
	find: find
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hZHQvRm9yZXN0QW1vcnRpemVkVHdvUGFzc2VzLmpzIl0sIm5hbWVzIjpbImZpbmQiLCJ1bmlvbiIsInAiLCJub2RlIiwiaXQiLCJwYXJlbnQiLCJVbml2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O1FBSWdCQSxJLEdBQUFBLEk7O0FBSmhCOztBQUVPLElBQU1DLHFEQUFOOztBQUVBLFNBQVNELElBQVQsQ0FBZ0JFLENBQWhCLEVBQW9CQyxJQUFwQixFQUEyQjs7QUFFakMsS0FBSUMsS0FBS0QsSUFBVDs7QUFFQSxRQUFRQyxPQUFPRixFQUFFRSxFQUFGLENBQWYsRUFBdUJBLEtBQUtGLEVBQUVFLEVBQUYsQ0FBNUI7O0FBRUEsUUFBUUYsRUFBRUMsSUFBRixNQUFZQyxFQUFwQixFQUF5Qjs7QUFFeEIsTUFBTUMsU0FBU0gsRUFBRUMsSUFBRixDQUFmO0FBQ0FELElBQUVDLElBQUYsSUFBVUMsRUFBVjtBQUNBRCxTQUFPRSxNQUFQO0FBRUE7O0FBRUQsUUFBT0QsRUFBUDtBQUVBOztBQUVNLElBQU1FLDhCQUFXLHVDQUFxQkwsS0FBckIsRUFBNkJELElBQTdCLENBQWpCOztrQkFFUTtBQUNkTSxtQkFEYztBQUVkTCxhQUZjO0FBR2REO0FBSGMsQyIsImZpbGUiOiJGb3Jlc3RBbW9ydGl6ZWRUd29QYXNzZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByYW5rZWR0cmVldW5pb24gLCBfUmFua2VkVHJlZVVuaXZlcnNlIH0gZnJvbSAnLi4vZnVuZGFtZW50YWxzJyA7XG5cbmV4cG9ydCBjb25zdCB1bmlvbiA9IHJhbmtlZHRyZWV1bmlvbiA7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kICggcCAsIG5vZGUgKSB7XG5cblx0bGV0IGl0ID0gbm9kZSA7XG5cblx0Zm9yICggOyBpdCAhPT0gcFtpdF0gOyBpdCA9IHBbaXRdICkgO1xuXG5cdHdoaWxlICggcFtub2RlXSAhPT0gaXQgKSB7XG5cblx0XHRjb25zdCBwYXJlbnQgPSBwW25vZGVdIDtcblx0XHRwW25vZGVdID0gaXQgO1xuXHRcdG5vZGUgPSBwYXJlbnQgO1xuXG5cdH1cblxuXHRyZXR1cm4gaXQgO1xuXG59XG5cbmV4cG9ydCBjb25zdCBVbml2ZXJzZSA9IF9SYW5rZWRUcmVlVW5pdmVyc2UoIHVuaW9uICwgZmluZCApIDtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRVbml2ZXJzZSAsXG5cdHVuaW9uICxcblx0ZmluZCAsXG59IDtcbiJdfQ==