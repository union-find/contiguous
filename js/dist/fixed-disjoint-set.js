'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/000-fundamentals */
		/* js/src/000-fundamentals/_RankedTreeForest.js */

		var _RankedTreeForest = function _RankedTreeForest(union, find) {

			var Forest = function Forest(n) {
				this.p = makesets(n);
				this.r = makeranks(n);
			};

			Forest.prototype.union = function (a, b) {
				return union(this.p, this.r, a, b);
			};

			Forest.prototype.find = function (x) {
				return find(this.p, x);
			};

			return Forest;
		};

		exports._RankedTreeForest = _RankedTreeForest;

		/* js/src/000-fundamentals/makeranks.js */
		var makeranks = function makeranks(n) {

			var r = new Array(n);

			for (var i = 0; i < n; ++i) {
				r[i] = 0;
			}return r;
		};

		exports.makeranks = makeranks;

		/* js/src/000-fundamentals/makesets.js */
		var makesets = function makesets(n) {

			var p = new Array(n);

			for (var i = 0; i < n; ++i) {
				p[i] = i;
			}return p;
		};

		exports.makesets = makesets;

		/* js/src/000-fundamentals/rankedtreeunion.js */

		var rankedtreeunion = function rankedtreeunion(p, r, a, b) {

			if (r[a] < r[b]) {
				p[a] = b;
				return b;
			} else if (r[a] > r[b]) {
				p[b] = a;
				return a;
			} else {
				p[b] = a;
				++r[a];
				return a;
			}
		};

		exports.rankedtreeunion = rankedtreeunion;

		/* js/src/001-adt */
		/* js/src/001-adt/Forest.js */
		(function (exports) {

			var union = function union(p, a, b) {

				p[find(p, b)] = find(p, a);

				return a;
			};

			var find = function find(p, x) {

				while (x !== p[x]) x = p[x];

				return x;
			};

			var Forest = function Forest(n) {
				this.p = makesets(n);
			};

			Forest.prototype.union = function (a, b) {
				return union(this.p, a, b);
			};

			Forest.prototype.find = function (x) {
				return find(this.p, x);
			};

			exports.union = union;
			exports.find = find;
			exports.Forest = Forest;
		})(exports['Forest'] = {});
		/* js/src/001-adt/ForestAmortizedHalving.js */
		(function (exports) {

			var union = rankedtreeunion;

			var find = function find(p, node) {

				var parent = p[node];

				for (; p[parent] !== parent; parent = p[node]) {

					p[node] = p[parent];
					node = p[node];
				}

				return parent;
			};

			exports.union = union;
			exports.find = find;
			exports.Forest = _RankedTreeForest(union, find);
		})(exports['ForestAmortizedHalving'] = {});
		/* js/src/001-adt/ForestAmortizedRecursive.js */
		(function (exports) {

			var union = rankedtreeunion;

			var find = function find(p, node) {

				if (node !== p[node]) p[node] = find(p, p[node]);

				return p[node];
			};

			exports.union = union;
			exports.find = find;
			exports.Forest = _RankedTreeForest(union, find);
		})(exports['ForestAmortizedRecursive'] = {});
		/* js/src/001-adt/ForestAmortizedSplitting.js */
		(function (exports) {

			var union = rankedtreeunion;

			var find = function find(p, node) {

				var parent = p[node];

				for (; p[parent] !== parent; parent = p[node]) {

					p[node] = p[parent];
					node = parent;
				}

				return parent;
			};

			exports.union = union;
			exports.find = find;
			exports.Forest = _RankedTreeForest(union, find);
		})(exports['ForestAmortizedSplitting'] = {});
		/* js/src/001-adt/ForestAmortizedTwoPasses.js */
		(function (exports) {

			var union = rankedtreeunion;

			var find = function find(p, node) {

				var it = node;

				for (; it !== p[it]; it = p[it]);

				while (p[node] !== it) {

					var _parent = p[node];
					p[node] = it;
					node = _parent;
				}

				return it;
			};

			exports.union = union;
			exports.find = find;
			exports.Forest = _RankedTreeForest(union, find);
		})(exports['ForestAmortizedTwoPasses'] = {});
		return exports;
	};
	if (typeof exports === "object") {
		definition(exports);
	} else if (typeof define === "function" && define.amd) {
		define("aureooms-js-fixed-disjoint-set", [], function () {
			return definition({});
		});
	} else if (typeof window === "object" && typeof window.document === "object") {
		definition(window["fixeddisjointset"] = {});
	} else console.error("unable to detect type of module to define for aureooms-js-fixed-disjoint-set");
})();