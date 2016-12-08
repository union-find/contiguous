"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = zeros;
function zeros(n) {
	var List = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;


	var a = new List(n);

	for (var i = 0; i < n; ++i) {
		a[i] = 0;
	}return a;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9mdW5kYW1lbnRhbHMvemVyb3MuanMiXSwibmFtZXMiOlsiemVyb3MiLCJuIiwiTGlzdCIsIkFycmF5IiwiYSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7O2tCQUF3QkEsSztBQUFULFNBQVNBLEtBQVQsQ0FBaUJDLENBQWpCLEVBQW9DO0FBQUEsS0FBZkMsSUFBZSx1RUFBUkMsS0FBUTs7O0FBRWxELEtBQU1DLElBQUksSUFBSUYsSUFBSixDQUFVRCxDQUFWLENBQVY7O0FBRUEsTUFBTSxJQUFJSSxJQUFJLENBQWQsRUFBa0JBLElBQUlKLENBQXRCLEVBQTBCLEVBQUVJLENBQTVCO0FBQWdDRCxJQUFFQyxDQUFGLElBQU8sQ0FBUDtBQUFoQyxFQUVBLE9BQU9ELENBQVA7QUFFQSIsImZpbGUiOiJ6ZXJvcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHplcm9zICggbiAsIExpc3QgPSBBcnJheSApIHtcblxuXHRjb25zdCBhID0gbmV3IExpc3QoIG4gKSA7XG5cblx0Zm9yICggbGV0IGkgPSAwIDsgaSA8IG4gOyArK2kgKSBhW2ldID0gMCA7XG5cblx0cmV0dXJuIGEgO1xuXG59XG4iXX0=