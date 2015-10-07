'use strict';

(function () {

	'use strict';

	var definition = function definition(exports, undefined) {

		/* js/src/000-fundamentals */
		/* js/src/000-fundamentals/_RankedTreeForest.js */

		var _RankedTreeUniverse = function _RankedTreeUniverse(union, find) {

			var Universe = function Universe(n) {
				this.p = selfs(n);
				this.r = zeros(n);
			};

			Universe.prototype.union = function (a, b) {
				return union(this.p, this.r, a, b);
			};

			Universe.prototype.find = function (x) {
				return find(this.p, x);
			};

			return Universe;
		};

		exports._RankedTreeUniverse = _RankedTreeUniverse;

		/* js/src/000-fundamentals/nulls.js */

		var nulls = function nulls(n) {

			var a = new Array(n);

			for (var i = 0; i < n; ++i) {
				a[i] = -1;
			}return a;
		};

		exports.nulls = nulls;

		/* js/src/000-fundamentals/ones.js */
		var ones = function ones(n) {

			var a = new Array(n);

			for (var i = 0; i < n; ++i) {
				a[i] = 1;
			}return a;
		};

		exports.ones = ones;

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

		/* js/src/000-fundamentals/selfs.js */
		var selfs = function selfs(n) {

			var a = new Array(n);

			for (var i = 0; i < n; ++i) {
				a[i] = i;
			}return a;
		};

		exports.selfs = selfs;

		/* js/src/000-fundamentals/zeros.js */
		var zeros = function zeros(n) {

			var a = new Array(n);

			for (var i = 0; i < n; ++i) {
				a[i] = 0;
			}return a;
		};

		exports.zeros = zeros;

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

			var Universe = function Universe(n) {
				this.p = selfs(n);
			};

			Universe.prototype.union = function (a, b) {
				return union(this.p, a, b);
			};

			Universe.prototype.find = function (x) {
				return find(this.p, x);
			};

			exports.union = union;
			exports.find = find;
			exports.Universe = Universe;
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
			exports.Universe = _RankedTreeUniverse(union, find);
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
			exports.Universe = _RankedTreeUniverse(union, find);
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
			exports.Universe = _RankedTreeUniverse(union, find);
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
			exports.Universe = _RankedTreeUniverse(union, find);
		})(exports['ForestAmortizedTwoPasses'] = {});
		/* js/src/001-adt/LinkedList.js */
		(function (exports) {

			var union = function union(back, next, a, b) {

				next[back[a]] = b;
				back[a] = back[b];
				return a;
			};

			var find = function find(next, node) {

				while (next[node] !== -1) node = next[node];

				return node;
			};

			var Universe = function Universe(n) {
				this.back = selfs(n);
				this.next = nulls(n);
			};

			Universe.prototype.union = function (a, b) {
				return union(this.back, this.next, a, b);
			};

			Universe.prototype.find = function (node) {
				return find(this.next, node);
			};

			exports.union = union;
			exports.find = find;
			exports.Universe = Universe;
		})(exports['LinkedList'] = {});
		/* js/src/001-adt/LinkedListWithHead.js */
		(function (exports) {

			var union = function union(back, next, a, b) {

				next[back[a]] = b;
				back[a] = back[b];

				for (var c = next[a]; c !== b; c = next[c]) {
					back[c] = back[b];
				}return a;
			};

			var find = function find(back, node) {
				return back[node];
			};

			var Universe = function Universe(n) {
				this.back = selfs(n);
				this.next = nulls(n);
			};

			Universe.prototype.union = function (a, b) {
				return union(this.back, this.next, a, b);
			};

			Universe.prototype.find = function (node) {
				return find(this.back, node);
			};

			exports.union = union;
			exports.find = find;
			exports.Universe = Universe;
		})(exports['LinkedListWithHead'] = {});
		/* js/src/001-adt/LinkedListWithHeadAndLength.js */
		(function (exports) {

			var union = function union(back, next, length, a, b) {

				if (length[a] < length[b]) {
					var c = a;
					a = b;
					b = c;
				}

				next[back[a]] = b;
				back[a] = back[b];

				for (var c = next[a]; c !== b; c = next[c]) {
					back[c] = back[b];
				}length[a] += length[b];

				return a;
			};

			var find = function find(back, node) {
				return back[node];
			};

			var Universe = function Universe(n) {
				this.back = selfs(n);
				this.next = nulls(n);
				this._length = ones(n);
			};

			Universe.prototype.union = function (a, b) {
				return union(this.back, this.next, this._length, a, b);
			};

			Universe.prototype.find = function (node) {
				return find(this.back, node);
			};

			exports.union = union;
			exports.find = find;
			exports.Universe = Universe;
		})(exports['LinkedListWithHeadAndLength'] = {});
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