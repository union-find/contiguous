'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = _RankedTreeUniverse;

var _selfs = require('./selfs');

var _selfs2 = _interopRequireDefault(_selfs);

var _zeros = require('./zeros');

var _zeros2 = _interopRequireDefault(_zeros);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _RankedTreeUniverse(union, find) {

	var Universe = function Universe(n) {
		var List = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;

		this.p = (0, _selfs2.default)(n, List);
		this.r = (0, _zeros2.default)(n, List);
	};

	Universe.prototype.union = function (a, b) {
		return union(this.p, this.r, a, b);
	};

	Universe.prototype.find = function (x) {
		return find(this.p, x);
	};

	return Universe;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvX1JhbmtlZFRyZWVVbml2ZXJzZS5qcyJdLCJuYW1lcyI6WyJfUmFua2VkVHJlZVVuaXZlcnNlIiwidW5pb24iLCJmaW5kIiwiVW5pdmVyc2UiLCJuIiwiTGlzdCIsIkFycmF5IiwicCIsInIiLCJwcm90b3R5cGUiLCJhIiwiYiIsIngiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUd3QkEsbUI7O0FBSHhCOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLG1CQUFULENBQStCQyxLQUEvQixFQUF1Q0MsSUFBdkMsRUFBOEM7O0FBRTVELEtBQU1DLFdBQVcsU0FBWEEsUUFBVyxDQUFXQyxDQUFYLEVBQThCO0FBQUEsTUFBZkMsSUFBZSx1RUFBUkMsS0FBUTs7QUFDOUMsT0FBS0MsQ0FBTCxHQUFTLHFCQUFPSCxDQUFQLEVBQVdDLElBQVgsQ0FBVDtBQUNBLE9BQUtHLENBQUwsR0FBUyxxQkFBT0osQ0FBUCxFQUFXQyxJQUFYLENBQVQ7QUFDQSxFQUhEOztBQUtBRixVQUFTTSxTQUFULENBQW1CUixLQUFuQixHQUEyQixVQUFXUyxDQUFYLEVBQWVDLENBQWYsRUFBbUI7QUFDN0MsU0FBT1YsTUFBTyxLQUFLTSxDQUFaLEVBQWdCLEtBQUtDLENBQXJCLEVBQXlCRSxDQUF6QixFQUE2QkMsQ0FBN0IsQ0FBUDtBQUNBLEVBRkQ7O0FBSUFSLFVBQVNNLFNBQVQsQ0FBbUJQLElBQW5CLEdBQTBCLFVBQVdVLENBQVgsRUFBZTtBQUN4QyxTQUFPVixLQUFNLEtBQUtLLENBQVgsRUFBZUssQ0FBZixDQUFQO0FBQ0EsRUFGRDs7QUFJQSxRQUFPVCxRQUFQO0FBRUEiLCJmaWxlIjoiX1JhbmtlZFRyZWVVbml2ZXJzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzZWxmcyBmcm9tICcuL3NlbGZzJyA7XG5pbXBvcnQgemVyb3MgZnJvbSAnLi96ZXJvcycgO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfUmFua2VkVHJlZVVuaXZlcnNlICggdW5pb24gLCBmaW5kICkge1xuXG5cdGNvbnN0IFVuaXZlcnNlID0gZnVuY3Rpb24gKCBuICwgTGlzdCA9IEFycmF5ICkge1xuXHRcdHRoaXMucCA9IHNlbGZzKCBuICwgTGlzdCApIDtcblx0XHR0aGlzLnIgPSB6ZXJvcyggbiAsIExpc3QgKSA7XG5cdH0gO1xuXG5cdFVuaXZlcnNlLnByb3RvdHlwZS51bmlvbiA9IGZ1bmN0aW9uICggYSAsIGIgKSB7XG5cdFx0cmV0dXJuIHVuaW9uKCB0aGlzLnAgLCB0aGlzLnIgLCBhICwgYiApIDtcblx0fSA7XG5cblx0VW5pdmVyc2UucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoIHggKSB7XG5cdFx0cmV0dXJuIGZpbmQoIHRoaXMucCAsIHggKSA7XG5cdH0gO1xuXG5cdHJldHVybiBVbml2ZXJzZSA7XG5cbn1cbiJdfQ==